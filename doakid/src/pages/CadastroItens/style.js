import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const ContainerCadastroItens = styled.div`
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
  .cadastro-item{
    height: 100px;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .input-extras{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  h1 {
    padding:3rem;
    font-family: 'Amatic SC', cursive;
    text-shadow: 1px 2px 3px #9B9B98;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;

export const ContainerCadastroItem = styled.div`
  width: 80vw;
  height: 63vh;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  border-radius: 0.4rem;
  padding: 6rem 2rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  Button {
    width: 20rem;
    height: 5.6rem;
    background: var(--color-button-background);
    color: #FFFFFF;
    border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.2s;
    margin: 2rem 0 1.2rem 0;
    font-size: 2rem;
    font-family: 'Amatic SC', cursive;
    text-shadow: 2px 2px 4px #000000;
    letter-spacing: 2px;
  }

  Button:hover {
    opacity: 0.8;
    background: var(--color-button-background);
    color: #FFFFFF;
    border: 0;
    border-radius: 0.6rem;
  }
  .Button-menu{
    width: 120px;
    height: 40px;
    color: #fff;
    background: #FF6400;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px #0000000b; 
  }
  .Button-menu:hover{
    opacity: 0.8;
    background: #FF6400;

  }
  .text{
    width: 65%;
    border-radius: 0.5rem;
    background: var(--color-input-background);
  }
  
  
`;