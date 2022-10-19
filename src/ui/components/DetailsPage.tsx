import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { TypeBadge } from "./TypeBadge";
import { DescriptionContainer, DescriptionText } from "./DescriptionComponent";

import {
  SizeData,
  DetailsContainer,
  StyledSizeCategoryText,
} from "./StatisticsCard";

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
  types: {
    type: {
      name: string;
    };
  };
  height: number;
  weight: number;
  abilities: AbilitiesTypes[];
}

export interface AbilitiesTypes {
  ability: {
    name: string;
  };
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

export const StyledTypeBadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  padding: 10px;
`;

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
  width: 400px;
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
const DescriptionAndDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
`;

const AbilitiesText = styled.p`
  color: black;
  font-family: "Arial";
  font-size: 18px;
  margin: 5px 0;
`;
const CategoryAndSizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
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

  const filterGenera =
    description.genera &&
    description.genera.filter((item) => {
      return item.language.name === "en";
    });
  console.log("filtering", filterGenera);
  const genus = filterGenera && filterGenera[0].genus;
  console.log("genus", genus);

  const abilities = pokemon.abilities;
  console.log("***abilities***", abilities);

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

        <DescriptionAndDetailsContainer>
          <DescriptionContainer>
            <DescriptionText>
              {description.flavor_text_entries &&
                description.flavor_text_entries[0].flavor_text}
            </DescriptionText>
          </DescriptionContainer>
          <DetailsContainer>
            <CategoryAndSizeContainer>
              <SizeData height={height} weight={weight} genus={genus!} />
            </CategoryAndSizeContainer>
            <AbilitiesContainer>
              <StyledSizeCategoryText>Abilities</StyledSizeCategoryText>

              {pokemon.abilities?.map((abilityIndex) => (
                <AbilitiesText>{abilityIndex.ability.name}&nbsp;</AbilitiesText>
              ))}
            </AbilitiesContainer>
          </DetailsContainer>
        </DescriptionAndDetailsContainer>
      </ImageAndDescriptionContainer>
      <StyledTypeBadgeContainer>
        {/* {pokemon.types?.map((typeIndex) => (
          <TypeBadge type={typeIndex.type.name}></TypeBadge>
        ))} */}
      </StyledTypeBadgeContainer>
    </Container>
  );
};
