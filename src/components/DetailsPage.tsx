import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  StyledTypeBadgeContainer,
  TypeBadge,
  PokemonTypeBadgeTypes,
} from "./TypeBadge";
interface OnePokemonTypes {
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
  types: PokemonTypeBadgeTypes[];
}

export const DetailsPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<Partial<OnePokemonTypes>>({});

  const params = useParams();

  useEffect(() => {
    const getOnePokemon = async () => {
      const apiResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      );
      const onePokemonDataObject = await apiResponse.json();
      setPokemon(onePokemonDataObject);
      console.log("onePokemonDataObject", onePokemonDataObject);
    };
    getOnePokemon();
  }, [params.name]);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        src={
          pokemon.sprites && pokemon!.sprites!.other!.dream_world!.front_default
        }
        alt={pokemon!.name}
      />
      <StyledTypeBadgeContainer>
        {pokemon.types?.map((typeIndex) => (
          <TypeBadge type={typeIndex.type.name}></TypeBadge>
        ))}
      </StyledTypeBadgeContainer>
    </div>
  );
};
