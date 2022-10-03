export interface PokemonCardTypes {
  game_indices: {
    id: number;
  };
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  name: string;
  height: number;
  types: {
    type: {
      name: string;
    };
  };
}
