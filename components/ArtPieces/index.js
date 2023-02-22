import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </li>
        );
      })}
    </ul>
  );
}
