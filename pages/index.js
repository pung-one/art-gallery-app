import useSWR from "swr";
import Spotlight from "../components/Spotlight";
import { URL } from "./_app";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

export default function SpotlightPage({
  artData,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const [randomPiece, setRandomPiece] = useState(
    artData[Math.floor(Math.random() * artData.length)]
  );
  const { imageSource, name, artist, slug } = randomPiece;
  return (
    <div>
      <Spotlight
        image={imageSource}
        name={name}
        artist={artist}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
    </div>
  );
}
