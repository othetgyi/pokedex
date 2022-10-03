import { render, screen } from "@testing-library/react";
import { TypeBadge } from "./TypeBadge";

describe("Type badge", () => {
  it("displays the type(s) of the Pokemon", () => {
    render(<TypeBadge type="fire" />);
    expect(screen.getByText("fire")).toBeVisible();
  });
  it("shows the correct background colour based on the type", () => {
    const { container } = render(<TypeBadge type="fire" />);
    expect(container.firstChild).toHaveStyle(`background: #f08030`);
  });
});
