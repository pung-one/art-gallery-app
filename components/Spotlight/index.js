import Image from "next/image";

export default function Spotlight({ image, title, artist }) {
  return (
    <>
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
