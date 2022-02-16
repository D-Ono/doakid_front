import styled from 'styled-components';

export const Item = styled.div`
  width:  250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  border-radius: 0.4rem;

  .bContainer {
    width: 250px;
    display:flex;
    justify-content: space-around;
  }
  .donateItem {
    width: 40%;
    background-color: #33CC95;
  }
  .donateItem:hover {
    background-color: #33CC95;
    filter: brightness(0.9);
  }
  .deleteUser {
    width: 40%;
    background-color: #E73553;
  }
  .deleteUser:hover {
    background-color: #E73553;
    filter: brightness(0.9);
  }

  img{
    width:200px;
    height:200px;
    box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
    border-radius: 0.4rem;
    
  }

  h2{
    margin-top: 8px;
  }
  p{
    text-align: center;
    margin: 0; 
  }
`;