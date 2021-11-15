import React from "react";
import { CharacterItem } from "./CharacterItem";

export const CharacterGrid: React.FC<{ items: any }> = ({ items }) => {
  return (
    <div>
      {items.map((item: any) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </div>
  );
};
