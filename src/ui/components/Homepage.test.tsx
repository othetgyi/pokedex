import { render, screen } from '@testing-library/react';
import { Homepage } from './Homepage';

describe('Homepage', () => {
    it('displays the title', () => {
        render(<Homepage />);
        expect(screen.getByText('Pokédex')).toBeVisible();
    })
    it('displays a Load More Pokémon button', () => {
        render(<Homepage />);
        expect(screen.queryByText('Load more Pokémon')).toBeInTheDocument();
    })
    it('displays the names of pokemon', () => {
        render(<Homepage />);
        expect(screen.getByText('bulbasaur')).toBeVisible();
    })
})