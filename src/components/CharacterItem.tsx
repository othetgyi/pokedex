import React from "react";

interface Item {
  name: string;
}

export const CharacterItem: React.FC<{ item: Item }> = ({ item }) => {
  return <div>{item.name}</div>;
};
