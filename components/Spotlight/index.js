import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({
  image,
  title,
  artist,
  slug,
  onToggleFavorite,
}) {
  return (
    <>
      <FavoriteButton slug={slug} onToggleFavorite={onToggleFavorite} />
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
