import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
interface Character {
  game_indices: {
    id: number;
  };
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  name: string;
}

export const DetailsPage: React.FC = () => {
  const [character, setCharacter] = useState<Partial<Character>>({});

  const params = useParams();
  
  useEffect(() => {
    // fetchCharacter();
    const fetchCharacter = async () => {
      const fetchCharacter = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
      const character = await fetchCharacter.json();
      setCharacter(character);
      console.log('character', character);
     }
     fetchCharacter()
  }, [params.name])

  

//  const fetchCharacter = async () => {
//    const fetchCharacter = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
//    const character = await fetchCharacter.json();
//    setCharacter(character);
//    console.log(character);
//   };

  return (
    <div>
      <h1>{character.name}</h1>
      <img
        src={character.sprites && character!.sprites!.other!.dream_world!.front_default}
        alt={character!.name}
      />
    </div>
  )
}

