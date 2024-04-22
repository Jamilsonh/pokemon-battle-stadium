import { usePokemons } from '@/context/pokemonContext';
import { BattleReadyPokemonsFunc, Pokemon } from '@/types/types';
import { useEffect, useState } from 'react';

export const usePokemonInBattle = () => {
  const [playerInBattle, setPlayerInBattle] = useState<Pokemon[]>([]);
  const [computerInBattle, setComputerInBattle] = useState<Pokemon[]>([]);
  const { pokemonsPlayer, pokemonsComputer } = usePokemons();

  const BattleReadyPokemons: BattleReadyPokemonsFunc = (
    pokemons,
    setInBattle
  ) => {
    const PokemonsInBattle = pokemons.filter((p) => p.inBattle);
    setInBattle(PokemonsInBattle);
  };

  useEffect(() => {
    BattleReadyPokemons(pokemonsPlayer, setPlayerInBattle);
    BattleReadyPokemons(pokemonsComputer, setComputerInBattle);
  }, [pokemonsPlayer, pokemonsComputer]);

  return {
    playerInBattle,
    setPlayerInBattle,
    computerInBattle,
    setComputerInBattle,
  };
};
