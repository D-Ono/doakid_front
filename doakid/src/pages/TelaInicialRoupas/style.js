import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1{
    padding:4rem;
    font-family: 'Amatic SC', cursive;
    text-shadow: 1px 2px 3px #9B9B98;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .container{
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .SideBar{
    width: 20%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: initial;
    align-items: flex-start;
  }
  .ItensContainer{
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 

  }
`;



