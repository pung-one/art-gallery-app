import ArtPiecePreview from "../../components/ArtPiecePreview";

export default function ArtPieces({
  artData,
  onToggleFavorite,
  artPiecesInfo,
}) {
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
              onToggleFavorite={onToggleFavorite}
              artPiecesInfo={artPiecesInfo}
            />
          </li>
        );
      })}
    </ul>
  );
}
