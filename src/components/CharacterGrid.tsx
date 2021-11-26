import React from "react";
import { Character } from "../App";

export const CharacterGrid: React.FC<{ characters: Character[] }> = ({
  characters,
}) => {
  return (
    <div>
      {characters.map((character: any) => (
        <h1>{character.name}</h1>
      ))}
    </div>
  );
};
