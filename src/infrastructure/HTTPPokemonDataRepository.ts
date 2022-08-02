export const getPokemonList = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
    const pokemonListData = await response.json();

    console.log("***pokemonListData***", pokemonListData);
    console.log("***pokemonListData.results***", pokemonListData.results);
    console.log("***Im in the try block!***");
    return pokemonListData.results;
  } catch (error) {
    console.log("***Im in the catch block!***");
    return null;
  }
};
