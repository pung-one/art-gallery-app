import useSWR from "swr";
import Spotlight from "../components/Spotlight";
import { URL } from "./_app";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export default function SpotlightPage({ artData }) {
  console.log(artData.length);
  const { imageSource, name, artist } =
    artData[Math.floor(Math.random() * artData.length)];

  return (
    <div>
      {/* <ArtPieces pieces={data} /> */}
      <Spotlight image={imageSource} title={name} artist={artist} />
    </div>
  );
}
