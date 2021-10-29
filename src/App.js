import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=200`
      );
      console.log(result);
    };
  });

  return <div className="container">Hello</div>;
};

export default App;
