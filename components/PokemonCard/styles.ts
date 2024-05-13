import styled from 'styled-components';

interface PokemonCardProps {
  width?: string;
  height?: string;
}

interface HpBarProps {
  hp: number;
  maxHp?: any;
}

export const ContainerPlayers = styled.div`
  background-color: rgb(204, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;

  h1 {
    width: 100%;
    height: 5%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid white;
  }
`;

export const ContainerPokemons = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
`;

export const PokemonCardContainer = styled.div<PokemonCardProps>`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: rgb(241, 238, 197);
  color: black;
  width: ${(props) => props.width || '30%'};
  height: ${(props) => props.height || '45%'};
`;

export const PokemonImageContainer = styled.div`
  height: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  border: 1px solid black;
  position: relative;
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 3%; // Ajuste para definir a posição do título sobre a imagem
  left: 50%;
  transform: translateX(-50%);
  color: black;
  text-transform: uppercase;
  font-weight: 800;
`;

export const PokemonType = styled.div`
  position: absolute;
  top: 5%;
  left: 0%;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  background-color: black;
  //border: 1px solid white;
  border-right: 1px solid white;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-radius: 0 1rem 1rem 0;
  text-transform: uppercase;
  font-size: 9px;
  color: white;
  font-weight: 800;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PokemonCardFooter = styled.div`
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  height: 25%;

  p {
    text-align: center;
    width: 30%;
    height: 50%;
  }
`;

// Container para a barra de HP
export const HpBarContainer = styled.div`
  width: 100%;
  background-color: #eee; // Cor de fundo para a barra total de HP
  border-radius: 8px;
  overflow: hidden;
  position: relative; // Necessário para posicionar corretamente a barra de HP atual
  height: 10px; // Define a altura da barra de HP
`;

export const HpTotalBar = styled.div`
  background-color: #ddd; // Uma cor que representa o total de HP (mais sutil que a cor de HP atual)
  width: 100%; // Sempre ocupa toda a largura do contêiner, representando o HP total
  height: 100%; // Mesma altura do contêiner
  position: absolute; // Posiciona sobre o contêiner de base
`;

export const HpCurrentBar = styled.div<HpBarProps>`
  background-color: ${({ hp, maxHp }) =>
    hp / maxHp > 0.75 ? 'green' : hp / maxHp > 0.5 ? 'yellow' : 'red'};
  width: ${({ hp, maxHp }) =>
    `${
      (hp / maxHp) * 100
    }%`}; // Calcula a largura baseada no HP atual sobre o HP total
  height: 100%;
  position: absolute;
  border-radius: 8px;
  transition: width 0.5s ease; // Adiciona uma transição suave para a mudança de HP
`;

//background-color: ${(props) => (props.isAlive === 'Não' ? 'red' : 'white')};
