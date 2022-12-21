import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  getPokemonList,
  getPokemonData,
} from "../../infrastructure/HTTPPokemonDataRepository";
import { Card, CardTypes } from "./Card";

const StyledGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 90%;
  background-color: white;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export type Pokemon = {
  name: string;
  url: string;
};

const LoadMoreButton = styled.button`
  width: 140px;
  height: 50px;
  font-family: "Arial";
  border-radius: 5px;
  background-color: #30a7d7;
  color: white;
  border: none;
  font-size: 18px;
`;

export const Grid: React.FC = () => {
  const limit = 12;
  const [offset, setOffset] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonData, setPokemonData] = useState<CardTypes[]>([]);
  /*
  const allPokemonNames = setAllPokemonData(pokemonList.data)

  allPokemonNames.map( pokemon => { 
    getPokemonData();
  
    }
  )

 const getPokemonData = (pokemonList: []) => {
    pokemonList.forEach(async (pokemon: any) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const pokemonDataObject = await response.json();
      console.log("***pokemonDataObject", pokemonDataObject);
      setAllPokemon((currentList) => [...currentList, pokemonDataObject]);
    });
  };*/

  // const [loadMore, setLoadMore] = useState(
  //   "https://pokeapi.co/api/v2/pokemon?limit=12"
  // );

  // const getPokemonList = async () => {
  //   const response = await fetch(loadMore);
  //   const pokemonListData = await response.json();

  //   setLoadMore(pokemonListData.next);

  //   console.log("***pokemonListData", pokemonListData);

  // };

  useEffect(() => {
    const getList = async () => {
      const data: Pokemon[] = await getPokemonList(limit, offset);
      setPokemonList((currentState) => [...currentState, ...data]);
    };
    getList();
  }, [offset]);

  useEffect(() => {
    const getPokemon = async () => {
      const unloaded = pokemonList.filter(() =>
        pokemonList.find((pokemon) => pokemon.name)
      );
      if (unloaded.length > 0) {
        const data: CardTypes[] = await getPokemonData(unloaded[0].url);
        setPokemonData((currentState) => [...currentState, ...data]);
      }
    };
    getPokemon();
  }, [pokemonList]);

  const getMorePokemon = () => {
    setOffset(offset + limit);
  };

  return (
    <div>
      <StyledGrid>
        {pokemonList.map((p: Pokemon) => (
          <Link
            key={p.name}
            to={`/details/${p.name}`}
            style={{ textDecoration: "none" }}
          >
            {/*<Card pokemon={p} key={p.key} />*/}
            {p.name}
          </Link>
        ))}
      </StyledGrid>
      <StyledButtonContainer>
        <LoadMoreButton onClick={getMorePokemon}>
          Load more Pokémon
        </LoadMoreButton>
      </StyledButtonContainer>
    </div>
  );
};
