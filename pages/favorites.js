import ArtPiecePreview from "../components/ArtPiecePreview";
import { useState, useEffect } from "react";
import ArtPieces from "./art-pieces";

export default function Favorites({
  artData,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(
      artPiecesInfo.map((isFav) => {
        return artData.find(
          (element) => isFav.isFavorite && element.slug === isFav.slug
        );
      })
    );
  }, [artPiecesInfo]);
  console.log(favorites);

  return (
    <ul>
      {favorites.map(({ slug, imageSource, name, artist }) => {
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
