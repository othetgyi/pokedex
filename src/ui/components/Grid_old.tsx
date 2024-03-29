import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  getPokemonList,
  getPokemonData,
} from "../../infrastructure/HTTPPokemonDataRepository";
import { Card, TypeBadgeTypes } from "./Card";

const StyledGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 90%;
  background-color: white;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LoadMoreButton = styled.button`
  width: 140px;
  height: 50px;
  font-family: "Arial";
  border-radius: 5px;
  background-color: #30a7d7;
  color: white;
  border: none;
  font-size: 18px;
`;

interface PokemonListTypes extends PokemonDataTypes {
  name: string;
  url: string;
}

interface PokemonDataTypes {
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  name: string;
  types: TypeBadgeTypes[];
}

export const Grid: React.FC = () => {
  const limit = 12;
  const [offset, setOffset] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<PokemonListTypes[]>([]);
  const [pokemonData, setPokemonData] = useState<PokemonDataTypes[]>([]);

  useEffect(() => {
    const getList = async () => {
      // const data: PokemonListTypes[] = await getPokemonList(limit, offset);
      // setPokemonList((currentListState) => [...currentListState, ...data]);
    };
    getList();
  }, [offset]);

  useEffect(() => {
    const getPokemon = async () => {
      const unloaded = pokemonList.filter(() =>
        pokemonList.find((pokemon) => pokemon.name)
      );
      if (unloaded.length > 0) {
        const data: PokemonDataTypes[] = await getPokemonData(unloaded[0].name);
        setPokemonData((currentDataState) => [...currentDataState, ...data]);
      }
    };
    getPokemon();
  }, [pokemonList]);

  console.log("***pokemonList", pokemonList);
  console.log("***pokemonData", pokemonData);

  const getMorePokemon = () => {
    setOffset(offset + limit);
  };

  return (
    <div>
      <StyledGrid>
        {pokemonList.map((p) => (
          <Link
            key={p.name}
            to={`/details/${p.name}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              imageSource={p.sprites.other.dream_world.front_default}
              name={p.name}
              types={p.types}
            />
          </Link>
        ))}
      </StyledGrid>
      <StyledButtonContainer>
        <LoadMoreButton onClick={getMorePokemon}>
          Load more Pokémon
        </LoadMoreButton>
      </StyledButtonContainer>
    </div>
  );
};
