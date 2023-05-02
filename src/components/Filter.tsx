/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState, useEffect } from "react";
import { pokeContext } from "../context";
import { Poke } from "../context/Provider";

export default function Filter() {
  const { pokemons, setPokemons } = useContext<any>(pokeContext);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<Poke[]>([]);

  useEffect(() => {
    if (!searchValue || searchValue.length < 1 || searchValue === "") {
      setPokemons(pokemons);
      setFilteredPokemons(pokemons);
      return;
    }

    const filteredPoke = pokemons.filter((poke: Poke) => {
      return poke.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFilteredPokemons(filteredPoke);
    setPokemons(filteredPoke);
  }, [pokemons, searchValue, setPokemons]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleReset = () => {
    setSearchValue("");
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
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
  };

  return (
    <section className="flex items-center justify-center">
      <form className="flex mb-5 gap-2">
        <label
          htmlFor="pokemon"
          className="flex justify-end items-center gap-2"
        >
          <p className="font-semibold  text-violet-300 text-xl">Pokemon</p>
          <input
            type="text"
            id="pokemon"
            onChange={handleChange}
            value={searchValue}
            autoComplete="false"
            placeholder="Escolha seu Pokemón"
            className="border-2 border-violet-900 rounded-lg shadow-lg p-1"
          />
          <button
            type="button"
            onClick={handleReset}
            className="text-white bg-violet-500 rounded-lg shadow-lg p-1"
          >
            Resetar filtros
          </button>
        </label>
        {searchValue && filteredPokemons.length === 0 && (
          <p className="text-violet-950 font-bold text-xl">
            Nenhum resultado encontrado
          </p>
        )}
      </form>
    </section>
  );
}
