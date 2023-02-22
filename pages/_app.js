import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import useSWR from "swr";
import { useState } from "react";

export const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((res) => res.json());
export default function App({ Component, pageProps }) {
  const data = useSWR(URL, fetcher);
  const { data: artData, error, isLoading } = data;
  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} artData={artData} />
      </Layout>
    </>
  );
}
