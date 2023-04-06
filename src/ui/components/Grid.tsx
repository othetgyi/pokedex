import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  getPokemonList,
  getPokemonData,
} from "../../infrastructure/HTTPPokemonDataRepository";

export const Grid = () => {
  const pokemonFilledList: any = async () => {
    const pokemonList = await getPokemonList(12);
    console.log("***pokemonList", pokemonList);
    console.log("***pokemonList[0]", pokemonList[0]);
    const pokemonData = pokemonList.forEach(async (pokemon: any) => {
      console.log("***pokemon", pokemon);
      console.log("***pokemon.name", pokemon.name);
      const pokemonData = await getPokemonData(pokemon.name);
      console.log("***pokemonData", pokemonData);
    });
    console.log("***pokemonData", pokemonData);
  };
  pokemonFilledList();

  return <div></div>;
};
