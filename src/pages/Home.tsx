/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { pokeContext } from "../context";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

import "../mobile/Home.css"
import Footer from "../components/Footer";

export default function Home() {
  const { pokemons, handlePokemonClick } = useContext<any>(pokeContext);

  return (
    <main>
      <section className="flex flex-col gap-5 justify-center h-44 items-center bg-violet-700 border-b-2 borde-gray-500 header-mobile">
        <h1 className="text-2xl border-b-2 border-violet-950 text-violet-300 font-semibold">
          Escolha seu pokemon, treinador!
        </h1>
        <Filter />
      </section>

      <section className="bg-violet-500 flex flex-wrap gap-7 items-center justify-center p-5 h-max">
        {pokemons.slice(0, 100).map((pokemon: any, index: number) => {
          return (
            <div
              key={index}
              className="rounded-lg p-1 flex flex-col items-center justify-center gap-5 border-4 border-violet-900"
            >
              <img
                src="https://lh3.googleusercontent.com/Uzo_GQXZXc1Nsj7OY3dbfRDam0TjTzV4A1dhgSYLzkdrygVRDZgDMv7JME4kEAkS0UFa0MdJevzXynIlc7X6yXRSEV2-XkrRpX1QzJts9-a6=e365-s0"
                alt={pokemon.name}
                className="w-20 rounded-full p-1 border-2 border-violet-900 bg-violet-800"
              />

              <p className="w-44 text-center text-white font-semibold border-b-2 border-violet-950">
                {`${pokemon.name.toUpperCase()}`}
              </p>
              <Link to={`/pokemon/:id`}>
                <button
                  onClick={() => handlePokemonClick(pokemon.url)}
                  className="font-semibold p-1 border-2 border-violet-950 rounded-lg text-gray-200 hover:bg-violet-900"
                >
                  Saiba mais
                </button>
              </Link>
            </div>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}
