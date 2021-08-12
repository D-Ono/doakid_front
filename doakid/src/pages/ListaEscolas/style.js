import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const ContainerEscola = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .escola{
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  h1{
    padding:4rem;
    font-family: 'Amatic SC', cursive;
    text-shadow: 1px 2px 3px #9B9B98;
    letter-spacing: 2px;
    font-weight: bold;
  }
  img{
    width: 200px;
    height: 200px;
  }

`;

export const ContainerEscolaCadastrada = styled.div`
  width: 80vw;
  height: 50vh;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  border-radius: 0.4rem;
  padding: 6rem 2rem;
  margin-bottom: 6rem;

`;