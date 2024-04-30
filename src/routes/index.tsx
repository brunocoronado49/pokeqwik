import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal<number>(1); // use for primitives types

  const changePokemonId = $((value: number) => {
    if ((pokemonId.value + value) <= 0) return;
    pokemonId.value += value;
  });

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{ pokemonId }</span>

      <PokemonImage id={pokemonId.value} />

      <div class="mt-2">
        <button onClick$={ () => changePokemonId(-1) } class="btn btn-primary mr-2">Previous</button>
        <button onClick$={ () => changePokemonId(+1) } class="btn btn-primary">Next</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Hello PokeQwik",
  meta: [
    {
      name: "description",
      content: "This is my first Qwik app",
    },
  ],
};
