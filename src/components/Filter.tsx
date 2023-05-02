import React, { useState } from "react";


export default function Filter() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="flex items-center justify-center">
      <form className="flex mb-5 gap-2">
        <label
          htmlFor="pokemon"
          className="flex justify-end items-center gap-2"
        >
          <p className="font-semibold text-violet-950 text-xl">Pokemon</p>
          <input
            type="text"
            id="pokemon"
            onChange={handleChange}
            autoComplete="false"
            placeholder="Escolha seu Pokemón"
            className="border-2 border-violet-900 rounded-lg shadow-lg p-1"
          />
        </label>
      </form>     
      <pre>{searchValue}</pre>
    </section>
  );
}
