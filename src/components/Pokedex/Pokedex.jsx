import React, { useState, useEffect } from "react";
import { getPokemonApi } from "../../api/Api"; // Import funkcji z Api.jsx
import "./pokedex.css";

const Pokedex = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("unown");

  // Funkcja do ładowania danych Pokémona
  const loadPokemonData = async () => {
    const pokemon = await getPokemonApi(query);
    setData(pokemon);
  };

  useEffect(() => {
    loadPokemonData();
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      loadPokemonData();
    }
  };

  return (
    <div className="pokedex-container">
      <div className="search-input">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter number or name"
        />
      </div>

      {data && (
        <div className="pokemon-card">
          <div className="pokemon-info">
            <h1>
              {data.name &&
                data.name[0].toLocaleUpperCase() + data.name.slice(1)}
            </h1>
            <h2>ID: {data.id}</h2>
            <p>Waga: {data.weight}</p> {/* Wyświetlanie wagi Pokémona */}
          </div>
          <div className="pokemon-image">
            <img src={data.imageN} alt={data.name} />
            <img src={data.imageS} alt={data.name} />
          </div>
          <div className="pokemon-data">
            <div className="pokemon-types">
              {data.types.map((value, key) => (
                <p key={key}>{value.type.name}</p>
              ))}
            </div>
            <div className="pokemon-abilities">
              {data.abilities.map((value, key) => (
                <p key={key}>{value.ability.name}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokedex;
