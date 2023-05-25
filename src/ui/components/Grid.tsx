import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, TypeBadgeTypes } from "./Card";

import {
  getPokemons,
  getPokemonData,
} from "../../infrastructure/GraphQLPokemonDataRepository";

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
  const [pokemonList, setPokemonList] = useState<PokemonListTypes[]>([]);
  const [pokemonData, setPokemonData] = useState<PokemonDataTypes[]>([]);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const result = await getPokemons();
        setPokemonList(result);
      } catch (err) {
        console.log("***GetPokemonList catch block");
      }
    };
    getPokemonList();
  }, []);

  useEffect(() => {
    const getPokemonDetails: any = () => {
      pokemonList.forEach(async (pokemon: any) => {
        try {
          const resultData = await getPokemonData(pokemon.name);
          setPokemonData(resultData);
        } catch (err) {
          console.log("***GetPokemonData catch block");
        }
      });
    };
    getPokemonDetails();
  }, []);

  return (
    <div>
      <StyledGrid>
        {pokemonList.map((p: any) => (
          <Link
            key={p.name}
            to={`/details/${p.name}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              imageSource={p.sprites?.front_default}
              name={p.name}
              types={p.types}
            />
          </Link>
        ))}
      </StyledGrid>
      <StyledButtonContainer>
        <LoadMoreButton onClick={getPokemons}>Load more Pokémon</LoadMoreButton>
      </StyledButtonContainer>
    </div>
  );
};
