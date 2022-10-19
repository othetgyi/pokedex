import { render, screen } from "@testing-library/react";
import { DescriptionComponent } from "./DescriptionComponent";

describe("Description component", () => {
    it("displays the Pokemon description", () => {
        render(<DescriptionComponent description="Mock Pokemon description"/>);
        expect(screen.getByText("Mock Pokemon description")).toBeVisible();
    })
})