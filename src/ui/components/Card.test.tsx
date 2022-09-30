import { render, screen } from "@testing-library/react";
// import { Card } from "./Card";

describe("Card", () => {
  it("displays the name of the Pokemon", () => {
    render(<Card />);
    expect(screen.getByText("MockPokemonName")).toBeVisible();
  });

  it("displays the Pokemon's image", () => {
    render(<Card />);
    const pokemonImage = screen.getByRole("img");
    expect(pokemonImage).toHaveAttribute("src");
  });

  it("displays the Pokemon's badges", () => {
    render(<Card />);
    expect(screen.getByText("MockType")).toBeVisible();
  });
});
