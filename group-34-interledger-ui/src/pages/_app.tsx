import { UserStateProvider } from "@/context/user-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserStateProvider>
      <Component {...pageProps} />;
    </UserStateProvider>
  );
}

export default MyApp;
