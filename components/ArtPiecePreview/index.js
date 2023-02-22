import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, name, artist, slug }) {
  return (
    <>
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
