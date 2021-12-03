import React from "react";
import { Character } from "../App";
import { CharacterItem } from "./CharacterItem";

export const CharacterGrid: React.FC<{ characters: Character[] }> = ({
  characters,
}) => {
  return (
    <div>
      {characters.map((character: any) => (
        <CharacterItem character={character} />
      ))}
    </div>
  );
};
