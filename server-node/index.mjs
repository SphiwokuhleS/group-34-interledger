// server.mjs
import { createServer } from 'node:http';
import { createAuthenticatedClient, isPendingGrant, isFinalizedGrant } from "@interledger/open-payments";
import readline from "readline/promises";

const WALLET_ADDRESS  = "https://ilp.interledger-test.dev/yee"

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
});

const client = await createAuthenticatedClient({
    logLevel:"debug",
    walletAddressUrl: WALLET_ADDRESS,
    privateKey: "/Users/sphiwokuhles/Dev/group-34-interledger/server-node/certs/priv-key.key",
    keyId: "5b13c454-fd31-4286-9516-eac3fdc7b5cb",
});

const walletAddress = await client.walletAddress.get({
    url: WALLET_ADDRESS,
});

console.log(walletAddress.authServer);

const grant = await client.grant.request(
    {
        url: walletAddress.authServer,
    },
    {
        access_token: {
            access: [
                {
                    type: "incoming-payment",
                    actions: ["list", "read", "read-all", "complete", "create"],
                },
            ],
        },
    },
);

if (isPendingGrant(grant)) {
    throw new Error("Expected non-interactive grant");
}

console.log("INCOMING_PAYMENT_ACCESS_TOKEN =", grant.access_token.value);
console.log(
    "INCOMING_PAYMENT_ACCESS_TOKEN_MANAGE_URL = ",
    grant.access_token.manage,
);


const incomingPayment = await client.incomingPayment.create(
    {
        url: new URL(WALLET_ADDRESS).origin,
        accessToken: grant.access_token.value,
    },
    {
        walletAddress: "https://ilp.interledger-test.dev/yee",
        incomingAmount: {
            value: "10",
            assetCode: "EUR",
            assetScale: 2,
        },
        expiresAt: new Date(Date.now() + 60_000 * 5).toISOString(),
    },
);

console.log("sphe");
console.log(incomingPayment.id);

const meltWallet = await client.walletAddress.get({
    url: "https://ilp.interledger-test.dev/melt",
});

const grantQoute = await client.grant.request(
    {
        url: meltWallet.authServer,
    },
    {
        access_token: {
            access: [
                {
                    type: "quote",
                    actions: ["create", "read", "read-all"],
                },
            ],
        },
    },
);

console.log("GRANT_Q_TOKEN");
console.log(grantQoute.continue.access_token.value);
console.log("HERESPHE:", grant.access_token.manage)

const quote = await client.quote.create(
    {
        url: new URL("https://ilp.interledger-test.dev/melt").origin,
        accessToken: grantQoute.access_token.value,
    },
    {
        method: "ilp",
        walletAddress: "https://ilp.interledger-test.dev/melt",
        receiver: incomingPayment.id,
    },
);

console.log(quote);

const outgoingPaymentGrant = await client.grant.request(
    {
        url: meltWallet.authServer,
    },
    {
        access_token: {
            access: [
                {
                    type: "outgoing-payment",
                    actions: ["read", "create"],
                    limits: {
                        debitAmount: {
                            assetCode: quote.debitAmount.assetCode,
                            assetScale: quote.debitAmount.assetScale,
                            value: quote.debitAmount.value,
                        },
                    },
                    identifier: meltWallet.id,
                },
            ],
        },
        interact: {
            start: ["redirect"],
        },
    }
);

console.log(outgoingPaymentGrant.continue.uri);

let finalizedOutgoingPaymentGrant;
await readline
    .createInterface({ input: process.stdin, output: process.stdout })
    .question("\nPlease accept grant and press enter...");

try {
    finalizedOutgoingPaymentGrant = await client.grant.continue({
        url: outgoingPaymentGrant.continue.uri,
        accessToken: outgoingPaymentGrant.continue.access_token.value,
    });
} catch (err) {
    console.error(err);
}

if (!isFinalizedGrant(finalizedOutgoingPaymentGrant)) {
    console.log(
        "There was an error continuing the grant. You probably have not accepted the grant at the url."
    );
}



console.log(finalizedOutgoingPaymentGrant.continue.uri);


const outgoingPayment = await client.outgoingPayment.create(
    {
        url: meltWallet.resourceServer,
        accessToken: finalizedOutgoingPaymentGrant.access_token.value,
    },
    {
        walletAddress: meltWallet.id,
        quoteId: quote.id,
    }
);

console.log(outgoingPayment.id);
//
// starts a simple http server locally on port 3000
server.listen(3001, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3001');
});

// run with `node server.mjs`
