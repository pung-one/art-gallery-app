import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import { useState, useEffect } from "react";

export default function Spotlight({
  image,
  title,
  artist,
  slug,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const info = artPiecesInfo.find((element) => element.slug === slug);
  useEffect(() => {
    if (info) {
      setIsFavorite(info.isFavorite);
    }
  }, [info]);
  return (
    <>
      <FavoriteButton
        slug={slug}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
      <Image
        src={image}
        height={150}
        width={300}
        alt={`Art piece ${title} by ${artist}`}
      />

      <h3>{`"${title}" by ${artist}`}</h3>
    </>
  );
}
