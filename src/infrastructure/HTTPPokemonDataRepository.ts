import axios from "axios";

const API_URL = "https://swapi-graphql.netlify.app/.netlify/functions/index";

export const getPokemonList = async (limit: number) => {
  try {
    const response = await axios.get(`${API_URL}?limit=${limit}`);
    return response.data.results;
  } catch (error) {
    return [];
  }
};

export const getPokemonData = async (pokemon: string) => {
  try {
    const response = await axios.get(`${API_URL}/${pokemon}`);
    return response.data;
  } catch (error) {
    return null;
  }
};
