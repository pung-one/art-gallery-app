import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";
import { URL } from "./_app";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);
  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>loading...</h1>;

  /* const [dailyImage, updateDailyImage] = useImmer({});
  const d = new Date().getDate(); */

  const { imageSource, name, artist } =
    data[Math.floor(Math.random() * data.length)];

  /* useEffect(() => {
    updateDailyImage((draft) => {
      draft.image = imageSource;
      draft.title = name;
      draft.artist = artist;
    });
  }, [d]); */

  return (
    <div>
      {/* <ArtPieces pieces={data} /> */}
      <Spotlight image={imageSource} title={name} artist={artist} />
    </div>
  );
}
