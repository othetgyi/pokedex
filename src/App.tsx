import "./App.css";
import React, { useEffect, useState } from "react";

import { CharacterGrid } from "./components/CharacterGrid";

export type Character = {
  name: string;
  url: string;
};

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
      const charactersInObject = await result.json();
      const characters = charactersInObject.results;
      console.log("***characters***", characters);

      characters.forEach(async (pokemon: any) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        console.log("***data***", data);
        setCharacters((currentList) => [...currentList, data]);
      });
    };
    fetchCharacters();
  }, []);
  return <CharacterGrid characters={characters} />;
};

export default App;
