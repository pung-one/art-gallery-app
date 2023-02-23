import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import { useState, useEffect } from "react";

export default function ArtPiecePreview({
  image,
  name,
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
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        isFavorite={isFavorite}
      />
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          height={150}
          width={300}
          alt={`Art piece ${name} by ${artist}`}
        />
      </Link>
      <h3>{`"${name}" by ${artist}`}</h3>
    </>
  );
}
