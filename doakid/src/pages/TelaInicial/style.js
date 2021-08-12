import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
  }

  .container{
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .SideBar{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: initial;
    align-items: flex-start;
  }
  .ItensContainer{
    width: 80%;
    display: flex;
    flex-direction: row;

  }
`;

export const Item = styled.div`
  width:  250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;

  h2{
    margin-top: 10px;
  }
  p{
    text-align: center;
  }
`;

