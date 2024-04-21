import { usePokemons } from '@/context/pokemonContext';
import { useEffect, useState } from 'react';

export const usePokemonInBattle = () => {
  const [playerInBattle, setPlayerInBattle] = useState([]);
  const [computerInBattle, setComputerInBattle] = useState([]);
  const { pokemonsPlayer, pokemonsComputer } = usePokemons();

  const BattleReadyPokemons = (pokemons, setInBattle) => {
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
