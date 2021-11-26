import "./App.css";
import React, { useEffect } from "react";

const App = () => {
  // const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
      const characters = await result.json();
      console.log(characters);
    };
    fetchCharacters();
  }, []);

  return <div className="container">Hello</div>;
};

export default App;
