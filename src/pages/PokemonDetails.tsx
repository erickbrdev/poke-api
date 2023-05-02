import { useContext } from "react";
import { pokeContext } from "../context";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Button from "../components/Button";

export default function PokemonDetails() {
  const { selectedPokemon } = useContext<any>(pokeContext);

  return (
    <section className="flex items-center h-screen justify-center bg-violet-300">
      {!selectedPokemon.name ||
      selectedPokemon.sprites.front_default === undefined ||
      selectedPokemon.weight === undefined ||
      selectedPokemon.height === undefined ||
      selectedPokemon.types[0].type.name === undefined ? (
        <div className="flex flex-col gap-20 items-center justify-center">
          <Loading />

          <Button />
        </div>
      ) : (
        <Card
          name={selectedPokemon.name}
          img={selectedPokemon.sprites.front_default}
          weigth={selectedPokemon.weight}
          height={selectedPokemon.height}
          type={selectedPokemon.types[0].type.name}
          url={""}
          onClick={() => {
            window.location.href = "/";
          }}
          titleBtn="Voltar"
        />
      )}
    </section>
  );
}
