import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const ContainerEscola = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
.escola{
    height: auto;
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  h1{
    padding:4rem;
    align-items: center;
    justify-content: center;
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
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  padding-left: 10rem;

  div {
    margin-right: 6rem;
    padding-left: 3.5rem;
  }
`;