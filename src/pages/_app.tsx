import type { AppProps } from "next/app";
import Head from "next/head";
import "./app.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>42메뉴추천!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
