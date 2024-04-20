'use client';

import GamePage from '@/components/GamePage';
import { PokemonProvider, usePokemons } from '@/context/pokemonContext';

export default function Home() {
  return (
    <PokemonProvider>
      <GamePage />
    </PokemonProvider>
  );
}
