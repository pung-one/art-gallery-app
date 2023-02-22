import ArtPiecePreview from "../../components/ArtPiecePreview";

export default function ArtPieces({ artData }) {
  return (
    <ul>
      {artData.map(({ slug, imageSource, name, artist }) => {
        return (
          <li key={slug}>
            <ArtPiecePreview
              slug={slug}
              image={imageSource}
              name={name}
              artist={artist}
            />
          </li>
        );
      })}
    </ul>
  );
}
