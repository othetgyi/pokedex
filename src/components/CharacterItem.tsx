import React from "react";
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

export const CharacterItem: React.FC<{ character: Character }> = ({
  character,
}) => {
  console.log("***character***", character);
  return (
    <div>
      <img
        src={character.sprites.other.dream_world.front_default}
        alt={character.name}
      />
      <h3>{character.name}</h3>
    </div>
  );
};
