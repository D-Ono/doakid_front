import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 14vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-secondary-background);
h1 {
  font-family: 'Amatic SC', cursive;
  letter-spacing: 2px;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px #000000;
  font-size: 4rem;
}
.menu{
  width: auto;
}

.profile{
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.Test{
  width: 100%;
  height: 14vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
  }

  Button:hover {
    opacity: 0.8;
    background: var(--color-button-background);
    color: #FFFFFF;
    border: 0;
    border-radius: 0.6rem;
  }
`;