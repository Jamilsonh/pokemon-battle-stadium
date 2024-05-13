import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import {
  Pokemon,
  PokemonContextType,
  PokemonProviderProps,
} from '../types/types';

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemonsPlayer, setPokemonsPlayer] = useState<Pokemon[]>([]);
  const [pokemonsComputer, setPokemonsComputer] = useState<Pokemon[]>([]);
  const [dadosCarregados, setDadosCarregados] = useState<boolean>(false);

  const fetchPokemons = async (): Promise<Pokemon[]> => {
    try {
      const promises = Array.from({ length: 6 }, () => {
        const randomId = Math.floor(Math.random() * 131) + 1;
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      });

      const pokemonResponses = await Promise.all(promises);

      const pokemonData = pokemonResponses.map((response) => {
        const data = response.data;
        const hp = data.stats.find(
          (stat: any) => stat.stat.name === 'hp'
        ).base_stat;

        const types = data.types.map((typeObj: any) => typeObj.type.name);

        return {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          hp,
          maxHp: hp,
          attack: data.stats.find((stat: any) => stat.stat.name === 'attack')
            .base_stat,
          defense: data.stats.find((stat: any) => stat.stat.name === 'defense')
            .base_stat,
          speed: data.stats.find((stat: any) => stat.stat.name === 'speed')
            .base_stat,
          types,
          isAlive: 'Sim',
          inBattle: false,
        };
      });

      return pokemonData;
    } catch (error) {
      console.error('Erro ao buscar dados dos Pokémon:', error);
      return [];
    }
  };

  useEffect(() => {
    const initializePokemons = async () => {
      const playerPokemons = await fetchPokemons();
      const computerPokemons = await fetchPokemons();

      setPokemonsPlayer(playerPokemons);
      setPokemonsComputer(computerPokemons);
      setDadosCarregados(true);
    };

    initializePokemons();
  }, []);

  const value: PokemonContextType = {
    pokemonsPlayer,
    setPokemonsPlayer,
    pokemonsComputer,
    setPokemonsComputer,
    dadosCarregados,
    setDadosCarregados,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export const usePokemons = (): PokemonContextType => {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemons deve ser usado dentro de um PokemonProvider');
  }
  return context;
};
