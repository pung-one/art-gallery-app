import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

test("renders all art pieces", () => {
  render(<ArtPieces />);
  const piece = screen.getByRole("heading", {
    name: `"Majestic Greek Sculpture" by Rachel Claire`,
  });
  expect(piece).toBeInTheDocument();
});
