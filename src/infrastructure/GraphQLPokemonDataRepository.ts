import axios from "axios";

const endpoint = "https://graphql-pokeapi.graphcdn.app/";
const headers = {
  "Content-Type": "application/json",
};
const GET_POKEMONS = `{
    pokemons(limit: 10) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
  }
}
  `;

const pokemonsQuery = {
  operationName: "getPokemons",
  query: `query getPokemons ${GET_POKEMONS}`,
  variables: {},
};

const GET_POKEMON_DATA = `{
  pokemon(name: $name) {
  id
  name
  sprites {
    front_default
  }
  moves {
    move {
      name
    }
  }
  types {
    type {
      name
    }
  }
}
}
`;

export const getPokemons = async () => {
  try {
    const response = await axios({
      url: endpoint,
      method: "post",
      data: pokemonsQuery,
      headers: headers,
    });
    return response.data.data.pokemons.results;
  } catch {
    console.log("***In the list catch block");
  }
};

export const getPokemonData = async (name: string) => {
  try {
    const response = await axios({
      url: endpoint,
      method: "post",
      data: {
        operationName: "getPokemonData",
        query: `query getPokemonData($name: String!) ${GET_POKEMON_DATA}`,
        variables: { name: name },
      },
      headers: headers,
    });
    return response.data.data.pokemon;
  } catch {
    console.log("***In the data catch block");
  }
};
