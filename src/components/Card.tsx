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
}

const StyledCard = styled.div`
  display: grid;
  background-color: #f5f5f5;
  font-size: 20px;
  font-family: "Gill Sans", sans-serif;
  height: 200px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const PokemonImage = styled.img`
  width: auto;
  max-height: 150px;
`;

export const Card: React.FC<{ pokemon: PokemonCardTypes }> = ({ pokemon }) => {
  console.log("***pokemon from Card***", pokemon);

  return (
    <StyledCard>
      <PokemonImage
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
    </StyledCard>
  );
};
