import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { Link } from "react-router-dom";

const StyledGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 960px;
`;

export type Pokemon = {
  name: string;
  url: string;
};

export const Grid: React.FC = () => {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getPokemonList = async () => {
    const response = await fetch(loadMore);
    const pokemonListData = await response.json();
    setLoadMore(pokemonListData.next);
    console.log("***pokemonListData", pokemonListData);

    const getPokemonData = (pokemonList: []) => {
      pokemonList.forEach(async (pokemon: any) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const pokemonDataObject = await response.json();
        console.log("***pokemonDataObject", pokemonDataObject);
        setAllPokemon((currentList) => [...currentList, pokemonDataObject]);
      });
    };
    getPokemonData(pokemonListData.results);
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <StyledGrid>
      {allPokemon.map((p: any) => (
        <Link to={`/details/${p.name}`}>
          <Card pokemon={p} key={p.key} />
        </Link>
      ))}
    </StyledGrid>
  );
};