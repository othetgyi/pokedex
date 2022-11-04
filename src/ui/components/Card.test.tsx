import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
    it("displays the name of the Pokemon", () => {
        // render(<Card />);
        expect(screen.getByText("MockPokemonName")).toBeVisible();
    });
})