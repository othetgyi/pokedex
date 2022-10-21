import { render, screen } from "@testing-library/react";
import { StatisticsCard } from "./StatisticsCard";

describe("StatisticsCard", () => {
    it("displays the Pokemon genus", () => {
        render(<StatisticsCard height={10} weight={5} genus="mockGenus"/>);
        expect(screen.getByText("mockGenus")).toBeVisible();
    });
    it("displays the Pokemon's height", () => {
        render(<StatisticsCard height={10} weight={20} genus="mockGenus"/>);
        expect(screen.getByText('1m')).toBeVisible();
    });
    it("displays the Pokemon's weight", () => {
        render(<StatisticsCard height={10} weight={20} genus="mockGenus"/>);
        expect(screen.getByText('2kg')).toBeVisible();
    })
})