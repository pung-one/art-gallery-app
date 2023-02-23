import { useRouter } from "next/router";
import Image from "next/image";
import FavoriteButton from "../../components/FavoriteButton";
import { useState, useEffect } from "react";

export default function ArtPieceDetails({
  artData,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const artPiece = artData.find((piece) => piece.slug === slug);
  const { imageSource, name, artist, year, genre } = artPiece;

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
      <Image
        src={imageSource}
        height={150}
        width={300}
        alt={`Art piece ${name} by ${artist}`}
      />
      <ul>
        <li>Name: {`"${name}"`}</li>
        <li>Artist: {artist}</li>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
      </ul>
    </>
  );
}
