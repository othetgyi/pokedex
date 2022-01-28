import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grid } from "./components/Grid";
import { DetailsPage } from "./components/DetailsPage";
import { NewPage } from "./components/NewPage";

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
  return (
    <Router>
      <li>
        <Link to="/sample">Sample</Link>
      </li>
      <li>
        <Link to="/newPage">NewPage</Link>
      </li>
      <Grid characters={characters} />
      <Routes>
        <Route path="/details/:name" element={<DetailsPage />} />
        <Route path="/newPage" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
