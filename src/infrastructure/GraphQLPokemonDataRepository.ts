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

export const getPokemons = async () => {
  try {
    const response = await axios({
      url: endpoint,
      method: "post",
      data: pokemonsQuery,
      headers: headers,
    });
    console.log(
      "***response.data.data.pokemons.results",
      response.data.data.pokemons.results
    );
    return response.data.data.pokemons.results;
  } catch {
    console.log("***In the catch block");
  }
};
