import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtPieceDetails({ artData }) {
  const router = useRouter();
  const { slug } = router.query;
  const artPiece = artData.find((piece) => piece.slug === slug);
  const { imageSource, name, artist, year, genre } = artPiece;
  return (
    <>
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
