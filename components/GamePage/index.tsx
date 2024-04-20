import { usePokemons } from '@/context/pokemonContext';
import React, { useEffect } from 'react';
import {
  BattleArena,
  ContainerGame,
  ContainerMain,
  ContainerMainPlayers,
  ContainerPlayers,
  Title,
} from './styles';
import { PokemonCard } from '../PokemonCard';
import { usePokemonBattleState } from '@/hooks/useSelectPokemonBattle';
import { PokemonContextType } from '@/types/types';

export default function GamePage(props: PokemonContextType): JSX.Element {
  const {
    pokemonsPlayer,
    pokemonsComputer,
    setPokemonsPlayer,
    setPokemonsComputer,
  } = usePokemons();
  usePokemonBattleState();

  console.log(pokemonsPlayer);

  return (
    <ContainerMain>
      <Title>POKEMON BATTLE GAMES</Title>
      <ContainerGame>
        <ContainerMainPlayers>
          <ContainerPlayers>
            <h1>PLAYER</h1>
            <PokemonCard
              pokemons={pokemonsPlayer}
              setPokemons={setPokemonsPlayer}
            />
          </ContainerPlayers>
        </ContainerMainPlayers>
        <BattleArena>
          {/* 
          <BattleContainer>
            <PokemonCard
              pokemons={playerInBattle}
              setPokemons={setPlayerInBattle}
              width='100%'
              height='95%'
            />

            <div>VS</div>

            <PokemonCard
              pokemons={computerInBattle}
              setPokemons={setComputerInBattle}
              width='100%'
              height='95%'
            />
          </BattleContainer>
          

          <button onClick={handleBattleClick}>Start Battle!</button>
          <BattleLogContainer>
            {battleLog.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </BattleLogContainer>
          */}
        </BattleArena>

        <ContainerMainPlayers>
          <ContainerPlayers>
            <h1>COMPUTER</h1>
            <PokemonCard
              pokemons={pokemonsComputer}
              setPokemons={setPokemonsComputer}
            />
          </ContainerPlayers>
        </ContainerMainPlayers>
      </ContainerGame>
    </ContainerMain>
  );
}
