/* eslint-disable @typescript-eslint/no-explicit-any */
import {  ReactNode, useEffect, useState } from "react";
import { pokeContext } from ".";

type Children = {
  children: ReactNode;
};

type Poke = {
  name: string;
  url: string;
};
const URL = `https://pokeapi.co/api/v2/pokemon?limit=151`;

export default function Provider({ children }: Children) {
  const [pokemons, setPokemons] = useState<Poke[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<any>([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "Erro na solicitação, tente novamente em alguns minutos"
          );
        }
      })
      .then((data) => {
        setPokemons(data.results);
      })
      .catch((error) => {
        if (error instanceof Error) {
          return error.message;
        }
      });
  }, [selectedPokemon]);

  function handlePokemonClick(url: string) {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "Falha ao buscar informações, tente novamente mais tarde"
          );
        }
      })
      .then((pokeData) => setSelectedPokemon(pokeData))
      .catch((error) => error.message);
  }

  function handleFilterChange(pokemon: Poke) {
    const filterPokemonByName = pokemons.filter((poke) => {
      return poke.name === pokemon.name;
    });

    setPokemons(filterPokemonByName)
  }

  const value = {
    pokemons,
    handlePokemonClick,
    selectedPokemon,
    handleFilterChange
  };

  return <pokeContext.Provider value={value}>{children}</pokeContext.Provider>;
}
