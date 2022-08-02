import { getPokemonList } from "./HTTPPokemonDataRepository";

const mockSuccessResponse = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  },
];

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockSuccessResponse),
//   })
// ) as jest.Mock;

// beforeEach(() => {
//   jest.resetAllMocks();
// });

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockSuccessResponse),
  });
}) as jest.Mock;

afterEach(() => {
  jest.restoreAllMocks();
});

it("returns Pokemon data", async () => {
  const pokemonList = await getPokemonList();
  console.log("***pokemonList in unit test***", pokemonList);

  expect(pokemonList).toEqual([
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  ]);
  expect(fetch).toHaveBeenCalledTimes(1);
});
