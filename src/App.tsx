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
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
      const charactersInObject = await result.json();
      const characters = charactersInObject.results;
      setCharacters(characters);
    };
    fetchCharacters();
  }, []);
  return <CharacterGrid characters={characters} />;
};

export default App;
