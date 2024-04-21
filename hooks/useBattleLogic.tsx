import { usePokemons } from '@/context/pokemonContext';
import { useState } from 'react';

export const useBattleLogic = ({ setPlayerInBattle, setComputerInBattle }) => {
  const { setPokemonsPlayer, setPokemonsComputer } = usePokemons();
  const [battleLog, setBattleLog] = useState([]);

  function calcularPorcentagemDeReducao(defesa, ataque) {
    return (defesa / ataque) * 100;
  }

  function calcularDano(atacante, defensor) {
    const ataqueBase = atacante.ATK;
    const dobroDoAtaque = atacante.ATK * 2;
    let reducaoDeDanoPercentual;

    if (atacante.ATK >= defensor.DEF) {
      const porcentagemDeReducao = calcularPorcentagemDeReducao(
        defensor.DEF,
        atacante.ATK
      );
      reducaoDeDanoPercentual = porcentagemDeReducao / 1.5;
    } else if (dobroDoAtaque >= defensor.DEF) {
      const porcentagemDeReducao = calcularPorcentagemDeReducao(
        defensor.DEF,
        atacante.ATK
      );
      const diferencaDeReducao = 200 + porcentagemDeReducao;
      reducaoDeDanoPercentual = diferencaDeReducao / 4.5;
    } else {
      const porcentagemDeReducao = calcularPorcentagemDeReducao(
        defensor.DEF,
        atacante.ATK
      );
      const diferencaDeReducao = 300 + porcentagemDeReducao;
      const reducaoDeDanoEstimada = diferencaDeReducao / 5.7;

      reducaoDeDanoPercentual =
        reducaoDeDanoEstimada >= 97 ? 98 : reducaoDeDanoEstimada;
    }

    let danoFinal = ataqueBase - (ataqueBase * reducaoDeDanoPercentual) / 100;
    danoFinal = Math.max(0, Math.round(danoFinal));
    defensor.HP -= danoFinal;

    return danoFinal;
  }

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const conductBattle = async (playerPokemon, computerPokemon) => {
    let player = { ...playerPokemon };
    let computer = { ...computerPokemon };

    let firstAttacker = player.speed > computer.speed ? 'player' : 'computer';

    while (player.hp > 0 && computer.hp > 0) {
      await delay(1000); // Espera por 1 segundo entre cada turno

      if (firstAttacker === 'player') {
        const damage = calcularDano(
          { ATK: player.attack },
          { DEF: computer.defense, HP: computer.hp }
        );
        computer.hp -= damage;
        firstAttacker = 'computer';
        setBattleLog((logs) => [
          ...logs,
          `${player.name} aplicou ${damage} de dano em ${computer.name}`,
        ]);
      } else {
        const damage = calcularDano(
          { ATK: computer.attack },
          { DEF: player.defense, HP: player.hp }
        );
        player.hp -= damage;
        firstAttacker = 'player';
        setBattleLog((logs) => [
          ...logs,
          `${computer.name} aplicou ${damage} de dano em ${player.name}`,
        ]);
      }

      // Atualiza os arrays principais
      setPokemonsPlayer((prev) =>
        prev.map((p) => (p.id === player.id ? { ...p, hp: player.hp } : p))
      );
      setPokemonsComputer((prev) =>
        prev.map((p) => (p.id === computer.id ? { ...p, hp: computer.hp } : p))
      );
    }

    // Verificação após a batalha para substituir Pokémon se necessário
    replaceFaintedPokemon(player, setPokemonsPlayer, setPlayerInBattle);
    replaceFaintedPokemon(computer, setPokemonsComputer, setComputerInBattle);
  };

  const replaceFaintedPokemon = async (pokemon, setPokemons, setInBattle) => {
    if (pokemon.hp <= 0) {
      // Atualizar o Pokémon que morreu
      await setPokemons((prev) =>
        prev.map((p) =>
          p.id === pokemon.id ? { ...p, isAlive: 'Não', inBattle: false } : p
        )
      );

      // Selecionar um novo Pokémon que ainda está vivo e não está em batalha
      setPokemons((prev) => {
        const alivePokemons = prev.filter(
          (p) => p.isAlive === 'Sim' && !p.inBattle
        );
        if (alivePokemons.length > 0) {
          const randomIndex = Math.floor(Math.random() * alivePokemons.length);
          const newBattlePokemon = alivePokemons[randomIndex];

          // Atualizar o novo Pokémon para estar em batalha
          setInBattle([newBattlePokemon]);

          return prev.map((p) =>
            p.id === newBattlePokemon.id ? { ...p, inBattle: true } : p
          );
        }
        return prev; // Se não há mais Pokémons vivos, não faz nada
      });
    }
  };

  return {
    conductBattle,
    battleLog,
  };
};
