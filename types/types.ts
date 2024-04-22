import { Dispatch, SetStateAction } from 'react';

// tipos.ts
export interface Pokemon {
  id: number;
  name: string;
  image: string;
  hp: number;
  maxHp?: number | string;
  attack: number;
  defense: number;
  speed: number;
  isAlive: string;
  inBattle: boolean;
}

export interface PokemonContextType {
  pokemonsPlayer: Pokemon[];
  setPokemonsPlayer: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  pokemonsComputer: Pokemon[];
  setPokemonsComputer: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  dadosCarregados: boolean;
  setDadosCarregados: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PokemonProviderProps {
  children: React.ReactNode;
}

export type PokemonListProps = {
  pokemons: Pokemon[];
  setPokemons: Dispatch<SetStateAction<Pokemon[]>>;
  width?: number | string;
  height?: number | string;
};

export type BattleReadyPokemonsFunc = (
  pokemons: Pokemon[],
  setInBattle: Dispatch<SetStateAction<Pokemon[]>>
) => void;
