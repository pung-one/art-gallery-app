import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import useSWR from "swr";
import { useState } from "react";
import { useEffect } from "react";

export const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const data = useSWR(URL, fetcher);
  const { data: artData, error, isLoading } = data;

  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  console.log(artPiecesInfo);
  function handleToggleFavorite(slug) {
    console.log(slug);
    setArtPiecesInfo((prevArtPieceInfo) => {
      const info = prevArtPieceInfo.find((element) => element.slug === slug);
      if (info) {
        console.log(info);
        return prevArtPieceInfo.map((info) =>
          info.slug === slug
            ? { slug: info.slug, isFavorite: !info.isFavorite }
            : info
        );
      }
      return [...prevArtPieceInfo, { slug: slug, isFavorite: true }];
    });
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          artData={artData}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
