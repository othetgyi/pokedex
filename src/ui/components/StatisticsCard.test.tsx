import { render, screen } from "@testing-library/react";
import { StatisticsCard } from "./StatisticsCard";

describe("StatisticsCard", () => {
    it("displays the Pokemon genus", () => {
        render(<StatisticsCard />);
        expect(screen.getByText("mockGenus")).toBeVisible();
    });
    it("displays the Pokemon's height", () => {

    });
    it("displays the Pokemon's weight", () => {

    })
})