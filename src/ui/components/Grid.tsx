import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  getPokemons,
  getPokemonData,
} from "../../infrastructure/GraphQLPokemonDataRepository";

export const Grid: any = async () => {
  const pokemonList = await getPokemons();

  const pokemonData = pokemonList?.forEach(async (pokemon: any) => {
    console.log("***pokemon", pokemon);
    console.log("***pokemon.name", pokemon.name);
    const pokemonData = await getPokemonData(pokemon.name);
    console.log("***pokemonData", pokemonData);
  });
  // console.log("***pokemonData", pokemonData);
  return <div>Hi </div>;
};
// pokemonFilledList();
