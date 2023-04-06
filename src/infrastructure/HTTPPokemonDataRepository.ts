import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonList = async (limit: number) => {
  try {
    const response = await axios.get(`${API_URL}?limit=${limit}`);
    console.log("***getPokemonList.data.results***", response.data.results);
    return response.data.results;
  } catch (error) {
    return [];
  }
};

export const getPokemonData = async (pokemon: string) => {
  try {
    const response = await axios.get(`${API_URL}/${pokemon}`);
    console.log("***getPokemonData.data.results***", response.data.results);
    return response.data;
  } catch (error) {
    console.log("***In getPokemonData catch block***");
    return null;
  }
};
