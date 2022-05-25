import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import {
  StyledTypeBadgeContainer,
  TypeBadge,
  PokemonTypeBadgeTypes,
} from "./TypeBadge";
import { DescriptionContainer, DescriptionText } from "./Description";

import { SizeData, StyledSizeDescriptionContainer } from "./SizeDescription";

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
  height: number;
  weight: number;
}

interface FlavorTypes {
  flavor_text: string;
}

interface GeneraTypes {
  genus: string;
  language: {
    name: string;
  };
}
interface PokemonSpeciesTypes {
  flavor_text_entries: FlavorTypes[];
  genera: GeneraTypes[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledPageTitle = styled.h1`
  font-family: "Gill Sans", sans-serif;
  color: black;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 300px;
  height: 300px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const ImageAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SizeAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: center;
  align-items: center;
`;

export const DetailsPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<Partial<OnePokemonTypes>>({});
  const [description, setDescription] = useState<Partial<PokemonSpeciesTypes>>(
    {}
  );

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

    const getPokemonDescription = async () => {
      const apiRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${params.name}`
      );
      const speciesObject = await apiRes.json();
      setDescription(speciesObject);
      console.log("speciesObject", speciesObject);
    };
    getOnePokemon();
    getPokemonDescription();
  }, [params.name]);

  const height = pokemon.height ?? 0;
  const weight = pokemon.weight ?? 0;
  const genera = description.genera;
  console.log("genera", genera);
  const name = pokemon.name && pokemon.name;
  const uppercaseName = (name: string) => {
    return name && name.charAt(0).toUpperCase() + name!.slice(1);
  };

  const filtering =
    description.genera &&
    description.genera.filter((item) => {
      return item.language.name === "en";
    });
  console.log("filtering", filtering);
  const genus = filtering && filtering[0].genus;
  console.log("genus", genus);

  return (
    <Container>
      <StyledPageTitle>{uppercaseName(name!)}</StyledPageTitle>
      <ImageAndDescriptionContainer>
        <ImageContainer>
          <img
            src={
              pokemon.sprites &&
              pokemon!.sprites!.other!.dream_world!.front_default
            }
            alt={pokemon!.name}
          />
        </ImageContainer>

        <SizeAndDescriptionContainer>
          <DescriptionContainer>
            <DescriptionText>
              {description.flavor_text_entries &&
                description.flavor_text_entries[0].flavor_text}
            </DescriptionText>
          </DescriptionContainer>
          <StyledSizeDescriptionContainer>
            <SizeData height={height} weight={weight} genus={genus!} />
          </StyledSizeDescriptionContainer>
        </SizeAndDescriptionContainer>
      </ImageAndDescriptionContainer>
      <StyledTypeBadgeContainer>
        {pokemon.types?.map((typeIndex) => (
          <TypeBadge type={typeIndex.type.name}></TypeBadge>
        ))}
      </StyledTypeBadgeContainer>
    </Container>
  );
};
