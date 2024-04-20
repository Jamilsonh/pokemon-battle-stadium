import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(242, 189, 75);
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  background-color: rgb(59, 76, 202);
  padding: 0 0.5rem;
  border-radius: 1rem;
  height: 5%;
  align-items: center;
`;

export const ContainerGame = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  background-color: rgb(59, 76, 202);
  padding: 1rem 0;
  height: 80%;
  max-height: 48rem;
  align-items: center;
`;

export const ContainerCard = styled.div`
  width: 40%;
  height: 90%;
  background-color: rgb(241, 238, 197);
  color: black;
  border-radius: 1rem;
`;

export const ContainerCards = styled.div`
  width: 90%;
  background-color: blue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid white;
  height: 15rem;
`;

export const ContainerMainPlayers = styled.div`
  width: 35%;
  height: 90%;
  max-width: 32rem;
  border: 1px solid white;
`;

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

export const ContainerBattle = styled.div`
  width: 30%;
  height: 32rem;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const SpaceEmpty = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BattleArena = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 25%;
  gap: 1rem;
  padding: 1rem 0;
  box-sizing: border-box;
`;

export const BattleContainer = styled.div`
  display: flex;
  height: 45%;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BattleLogContainer = styled.div`
  background-color: rgba(241, 238, 197, 1);
  color: black;
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: 1rem;
  height: 20%;
  overflow: auto;
  width: 90%;
  font-size: 0.9rem;
  font-weight: 800;
`;
