import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getPokemonList } from "./HTTPPokemonDataRepository";

describe("HTTPPokemonDataRepository", () => {
  const mockAdapter = new MockAdapter(axios);

  describe("getPokemonList", () => {
    it("returns Pokemon data", async () => {
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
      expect(await getPokemonList()).toEqual([
        {
          name: "mock Pokemon",
          url: "https://fakePokemonUrl.com",
        },
      ]);
    });
  });
});
