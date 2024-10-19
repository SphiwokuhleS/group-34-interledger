// server.mjs
import { createServer } from 'node:http';
import { createAuthenticatedClient, isPendingGrant } from "@interledger/open-payments";

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
        expiresAt: new Date(Date.now() + 60_000 * 10).toISOString(),
    },
);

console.log("sphe");
console.log(incomingPayment.id);

const grantQoute = await client.grant.request(
    {
        url: walletAddress.authServer,
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

console.log(grantQoute);

const quote = await client.quote.create(
    {
        url: new URL("https://ilp.interledger-test.dev/melt").origin,
        accessToken: grant.access_token.value,
    },
    {
        method: "ilp",
        walletAddress: "https://ilp.interledger-test.dev/melt",
        receiver: incomingPayment.id,
    },
);

console.log(quote);

const payGrant = await client.grant.request(
    {
        url: walletAddress.authServer,
    },
    {
        access_token: {
            access: [
                {
                    identifier: walletAddress.id,
                    type: "outgoing-payment",
                    actions: ["list", "list-all", "read", "read-all", "create"],
                    limits: {
                        debitAmount: "200",
                        receiveAmount: incomingPayment.receivedAmount.value,
                    },
                },
            ],
        },
        interact: {
            start: ["redirect"],
            finish: {
                method: "redirect",
                uri: "https://google.com",
                //nonce: NONCE,
            },
        },
    },
);

console.log(payGrant);



// starts a simple http server locally on port 3000
server.listen(3001, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3001');
});

// run with `node server.mjs`
