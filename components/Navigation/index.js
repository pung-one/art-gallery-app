import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 0;
  font-size: 3vh;
  padding: 3vh;
  background-color: lightgray;
  z-index: 201;
`;

export default function Navigation() {
  return (
    <StyledList>
      <Link href={`/`}>Home</Link>
      <Link href={`/art-pieces`}>All</Link>
      <Link href={""}>Favourites</Link>
    </StyledList>
  );
}
