import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getPokemonList, getPokemonData } from "./HTTPPokemonDataRepository";

describe("HTTPPokemonDataRepository", () => {
  const mockAdapter = new MockAdapter(axios);

  describe("getPokemonList", () => {
    xit("returns Pokemon data", async () => {
      mockAdapter
        .onGet("https://pokeapi.co/api/v2/pokemon?limit=12")
        .reply(200, {
          results: [
            {
              name: "mock Pokemon",
              url: "https://fakePokemonUrl.com",
            },
          ],
        });
      expect(await getPokemonList(0)).toEqual([
        {
          name: "mock Pokemon",
          url: "https://fakePokemonUrl.com",
        },
      ]);
    });
  });
  describe("getPokemondata", () => {
    xit("returns data for one Pokemon", async () => {
      mockAdapter
        .onGet("https://pokeapi.co/api/v2/pokemon/mockPokemon")
        .reply(200, {
          results: [
            {
              name: "mockPokemon",
              sprites: {
                other: {
                  dream_world: {
                    front_default:
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/mock_pokemon.svg",
                  },
                },
              },
            },
          ],
        });
      expect(await getPokemonData("mockPokemon")).toEqual([
        {
          name: "mockPokemon",
          sprites: {
            other: {
              dream_world: {
                front_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/mock_pokemon.svg",
              },
            },
          },
        },
      ]);
    });
  });
});
