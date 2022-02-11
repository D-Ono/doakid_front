import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 35vw;
  height: auto;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  border-radius: 0.4rem;
  padding: 2rem;
  margin: 2rem;

  h3 {
    padding-left: 2rem;
  }
  
  div {
    width: 35vw;
    display: flex; 
    justify-content: center;

    button:hover {
      opacity: 0.8;
      background: var(--color-button-background);
      color: #FFFFFF;
      border: 0;
      border-radius: 0.6rem;
    }
  }
`;