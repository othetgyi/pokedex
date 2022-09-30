import { render, RenderResult, screen } from "@testing-library/react";
import { Homepage } from "./Homepage";
import { getPokemonList } from "../../infrastructure/HTTPPokemonDataRepository";

describe("Homepage", () => {
  let view: RenderResult;

  const getPokemonList = () => Promise.resolve({ name: "mockPokemon" });

  it("displays the title", () => {
    view = render(<Homepage />);
    expect(screen.getByText("Pokédex")).toBeVisible();
  });
  it("displays a Load More Pokémon button", () => {
    render(<Homepage />);
    expect(screen.getByText("Load more Pokémon")).toBeInTheDocument();
  });
});
