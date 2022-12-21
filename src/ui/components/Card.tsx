import React from "react";
import styled from "styled-components";
import { TypeBadge, TypeBadgeTypes } from "./TypeBadge";

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  padding: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
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

type SpritesTypes = {
  other: {
    dream_world: {
      front_default: string;
    };
  };
};

export type CardTypes = {
  game_indices: {
    id: number;
  };
  sprites: SpritesTypes;
  types: TypeBadgeTypes[];
  name: string;
};

export const Card: React.FC<{ pokemon: CardTypes }> = ({ pokemon }) => {
  console.log("***pokemon from Card***", pokemon);
  const pokemonTypes = pokemon.types;
  console.log("****pokemonTypes", pokemonTypes);

  return (
    <CardContainer>
      <PokemonImage
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
      <TypeContainer>
        {pokemon.types?.map((typeIndex) => (
          <TypeBadge type={typeIndex.type.name}></TypeBadge>
        ))}
      </TypeContainer>
    </CardContainer>
  );
};
