import { usePokemons } from '@/context/pokemonContext';
import { Pokemon } from '@/types/types';
import { useEffect } from 'react';

export const usePokemonBattleState = () => {
  const {
    setPokemonsPlayer,
    setPokemonsComputer,
    pokemonsPlayer,
    pokemonsComputer,
    dadosCarregados,
    setDadosCarregados,
  } = usePokemons();

  useEffect(() => {
    if (pokemonsPlayer && pokemonsComputer && dadosCarregados) {
      setPokemonsPlayer(selectPokemonForBattle(pokemonsPlayer));
      setPokemonsComputer(selectPokemonForBattle(pokemonsComputer));
    }
    console.log(pokemonsPlayer);
    setDadosCarregados(false);
  }, [pokemonsPlayer, pokemonsComputer, dadosCarregados]);

  // Função para selecionar um Pokémon para a batalha
  const selectPokemonForBattle = (pokemons: Pokemon[]): Pokemon[] => {
    if (pokemons.length === 0) return pokemons;

    // Clonando o array para evitar mutações diretas no state
    const updatedPokemons = [...pokemons];

    // Escolhendo um índice aleatório
    const randomIndex = Math.floor(Math.random() * pokemons.length);

    // Atualizando o estado inBattle do Pokémon escolhido
    updatedPokemons[randomIndex] = {
      ...updatedPokemons[randomIndex],
      inBattle: true,
    };

    return updatedPokemons;
  };

  return {
    pokemonsPlayer,
    pokemonsComputer,
    setPokemonsPlayer,
    setPokemonsComputer,
  };
};
