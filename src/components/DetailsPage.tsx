import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { PokemonImage} from "./Card";

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

  const params = useParams();
  
  useEffect(() => {
    fetchCharacter();
    console.log(params);
  })

  const [character, setCharacter] = useState<null | Character>(null);

 const fetchCharacter = async () => {
   const fetchCharacter = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
   const character = await fetchCharacter.json();
   setCharacter(character);
   console.log(character);

  }

  return (
    <div>
      <h1>{character!.name}</h1>
      <PokemonImage
        src={character!.sprites.other.dream_world.front_default}
        alt={character!.name}
      />
    </div>
  )
}

