import React from "react";
import styled from "styled-components";
interface Character {
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

export const CharacterItem: React.FC<{ character: Character }> = ({
  character,
}) => {
  console.log("***character***", character);
  return (
    <StyledCard>
      <PokemonImage
        src={character.sprites.other.dream_world.front_default}
        alt={character.name}
      />
      <h3>{character.name}</h3>
    </StyledCard>
  );
};
