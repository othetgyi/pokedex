import axios from "axios";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonList = async (limit:number, offset:number) => {
  try {
    const response = await axios.get(
      `${API_URL}?limit=${limit}&offset=${offset}`
    );
    console.log("***response***", response);
    console.log("***response.data***", response.data);
    console.log("***response.data.results***", response.data.results);

    console.log("***Im in the try block!***");
    return response.data.results;
  } catch (error) {
    console.log("***Im in the catch block!***");
    return [];
  }
};

export const getPokemonData = async (pokemon: string) => {
  try {
    const response = await axios.get(`${API_URL}/${pokemon}`);
    console.log("***response.data.results***", response.data.results);
    return response.data.results;
  } catch (error) {
    console.log("***In getPokemonData catch block***");
    return null;
  }

}
