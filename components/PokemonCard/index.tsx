import { FC, useEffect, useState } from 'react';
import {
  ContainerPlayers,
  ContainerPokemons,
  HpBarContainer,
  HpCurrentBar,
  HpTotalBar,
  PokemonCardBody,
  PokemonCardContainer,
  PokemonCardFooter,
  PokemonCardHeader,
} from './styles';

import { PokemonListProps } from '../../types/types';

// Adapt the component to TypeScript
export const PokemonCard: FC<PokemonListProps> = ({
  pokemons,
  setPokemons,
  width,
  height,
}) => {
  // Inicializando o estado com hp e maxHp para cada Pokémon
  /*
  const [pokemons2, setPokemons] = useState(
    pokemons.map((pokemon) => ({
      ...pokemon,
      maxHp: pokemon.hp, // Inicializa maxHp com o valor de hp vindo das props
    }))
  );
  */

  /*const updatePokemonHp = (pokemonIndex, hpChange) => {
    // Atualiza hp dentro dos limites de 0 e maxHp
    setPokemons((pokemons) =>
      pokemons.map((pokemon, index) => {
        if (index === pokemonIndex) {
          const newHp = Math.max(
            0,
            Math.min(pokemon.hp + hpChange, pokemon.maxHp)
          );
          return { ...pokemon, hp: newHp };
        }
        return pokemon;
      })
    );
  };
  */

  useEffect(() => {
    setPokemons(
      pokemons.map((pokemon) => ({
        ...pokemon,
        maxHp: pokemon.hp,
      }))
    );
  }, []);

  console.log(pokemons);

  return (
    <ContainerPokemons>
      {pokemons.map((pokemon, index) => (
        <PokemonCardContainer
          key={index}
          width={width ? `${width}%` : undefined}
          height={height ? `${height}%` : undefined}
        >
          <PokemonCardHeader>
            <p>{pokemon.name}</p>
            {/* <button onClick={() => updatePokemonHp(index, -10)}>-</button>
            <button onClick={() => updatePokemonHp(index, 10)}>+</button>*/}
          </PokemonCardHeader>

          <PokemonCardBody>
            <img src={pokemon.image} alt={pokemon.name} />
          </PokemonCardBody>

          <PokemonCardFooter>
            <p>ATK {pokemon.attack}</p>
            <p>DEF {pokemon.defense}</p>
            <p>SPD {pokemon.speed}</p>
          </PokemonCardFooter>

          <HpBarContainer>
            <HpTotalBar />
            <HpCurrentBar hp={pokemon.hp} maxHp={pokemon.maxHp || 100} />
          </HpBarContainer>
          <div>{pokemon.hp}</div>
        </PokemonCardContainer>
      ))}
    </ContainerPokemons>
  );
};
