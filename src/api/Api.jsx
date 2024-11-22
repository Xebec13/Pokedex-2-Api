import axios from "axios";

// Funkcja do pobierania danych o Pokémona
export const getPokemonApi = async (query) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;

  const response = await axios.get(URL);
  return {
    imageS: response.data.sprites.other.home.front_shiny,
    imageN: response.data.sprites.other.home.front_default,
    name: response.data.name,
    id: response.data.id,
    weight: response.data.weight,
    types: response.data.types,
    abilities: response.data.abilities
  };
};
