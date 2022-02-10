import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const ProfileContainer = styled.div`
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
  .perfil{
    height: auto;
    margin: 4rem;
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  h1{
    font-family: 'Amatic SC', cursive;
    letter-spacing: 2px;
    text-shadow: 1px 2px 3px #9B9B98;
    font-weight: bold;
    padding:3rem;
  }
  h2{
    font-family: 'Amatic SC', cursive;
    letter-spacing: 2px;
    text-shadow: 1px 2px 3px #9B9B98;
    font-weight: bold;
  }

  img{
    width: 200px;
    height: 200px;
  }
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
    font-family: 'Amatic SC', cursive;
    text-shadow: 1px 1px #000000;
    letter-spacing: 2px;
    font-size: 2rem;
  }
  
  Button:hover {
    opacity: 0.8;
    background: var(--color-button-background);
    color: #FFFFFF;
    border: 0;
    border-radius: 0.6rem;
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