import useSWR from "swr";
import Spotlight from "../components/Spotlight";
import { URL } from "./_app";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export default function SpotlightPage({ artData, onToggleFavorite }) {
  const { imageSource, name, artist, slug } =
    artData[Math.floor(Math.random() * artData.length)];
  return (
    <div>
      {/* <ArtPieces pieces={data} /> */}
      <Spotlight
        image={imageSource}
        name={name}
        artist={artist}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
    </div>
  );
}
