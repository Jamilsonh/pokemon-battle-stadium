import { usePokemons } from '@/context/pokemonContext';
import {
  BattleArena,
  BattleContainer,
  BattleLogContainer,
  ContainerGame,
  ContainerMain,
  ContainerMainPlayers,
  ContainerPlayers,
  Title,
} from './styles';
import { PokemonCard } from '../PokemonCard';
import { usePokemonBattleState } from '@/hooks/useSelectPokemonBattle';
import { PokemonContextType } from '@/types/types';
import { usePokemonInBattle } from '@/hooks/usePokemonInBattle';
import { useBattleLogic } from '@/hooks/useBattleLogic';

export default function GamePage(props: PokemonContextType): JSX.Element {
  const {
    pokemonsPlayer,
    pokemonsComputer,
    setPokemonsPlayer,
    setPokemonsComputer,
  } = usePokemons();
  usePokemonBattleState();

  const {
    playerInBattle,
    setPlayerInBattle,
    computerInBattle,
    setComputerInBattle,
  } = usePokemonInBattle();

  const { conductBattle, battleLog } = useBattleLogic({
    setPlayerInBattle,
    setComputerInBattle,
  });

  const handleBattleClick = () => {
    if (playerInBattle.length > 0 && computerInBattle.length > 0) {
      conductBattle(playerInBattle[0], computerInBattle[0]);
    } else {
      alert('Make sure both players have selected their pokemons!');
    }
  };

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
          <BattleContainer>
            <PokemonCard
              pokemons={playerInBattle}
              setPokemons={setPlayerInBattle}
              width={100}
              height={90}
            />

            <div>VS</div>

            <PokemonCard
              pokemons={computerInBattle}
              setPokemons={setComputerInBattle}
              width={100}
              height={90}
            />
          </BattleContainer>

          <button onClick={handleBattleClick}>Start Battle!</button>
          <BattleLogContainer>
            {battleLog.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </BattleLogContainer>
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
