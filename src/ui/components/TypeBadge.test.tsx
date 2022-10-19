import { render, screen } from "@testing-library/react";
import { TypeBadge } from "./TypeBadge";

describe("Type badge", () => {
  it("displays the type(s) of the Pokemon", () => {
    render(<TypeBadge type="fire" />);
    expect(screen.getByText("fire")).toBeVisible();
  });
  it("shows the correct background colour based on the type", () => {
    render(<TypeBadge type="fire" />);
    expect(screen.getByTestId('background')).toHaveStyle(`background: #f08030`);
  });
});
