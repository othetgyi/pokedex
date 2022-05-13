import React from "react";
import styled from "styled-components";

export interface PokemonCardTypes {
  game_indices: {
    id: number;
  };
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  name: string;
  height: number;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
}

const StyledCard = styled.div`
  display: grid;
  background-color: #f5f5f5;
  font-size: 20px;
  font-family: "Gill Sans", sans-serif;
  height: 300px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const PokemonImage = styled.img`
  width: auto;
  max-height: 150px;
`;

const StyledType = styled.div`
  display: flex;
  color: blue;
  font-size: 16px;
`;
export const Card: React.FC<{ pokemon: PokemonCardTypes }> = ({ pokemon }) => {
  console.log("***pokemon from Card***", pokemon);
  const pokemonTypes = pokemon.types;
  console.log("****pokemonTypes", pokemonTypes);

  return (
    <StyledCard>
      <PokemonImage
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
      <div>
        {pokemon.types.map((pokemon) => (
          <StyledType>Type: {pokemon.type.name}</StyledType>
        ))}
      </div>
    </StyledCard>
  );
};
