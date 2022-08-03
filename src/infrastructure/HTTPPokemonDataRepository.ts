import axios from "axios";

export const getPokemonList = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=12"
    );
    console.log("***response***", response);
    console.log("***response.data***", response.data);
    console.log("***response.data.results***", response.data.results);

    console.log("***Im in the try block!***");
    return response.data.results;
  } catch (error) {
    console.log("***Im in the catch block!***");
    return null;
  }
};
