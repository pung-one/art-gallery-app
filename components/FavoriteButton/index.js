import FavSymb from "/resources/assets/heart.svg";
import Image from "next/image";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  right: 0px;
  height: 32px;
  width: 32px;
  border: none;
  color: red;
  background-color: transparent;
  z-index: 200;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <StyledButton type="button" onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? (
        <FavSymb fill="red" />
      ) : (
        <FavSymb fill="none" stroke="black" />
      )}
    </StyledButton>
  );
}
