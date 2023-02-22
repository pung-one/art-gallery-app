import ArtPiecePreview from "../../components/ArtPiecePreview";

export default function ArtPieces({ artData }) {
  return (
    <ul>
      {artData.map((piece) => {
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
