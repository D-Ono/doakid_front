import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const LoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-family: 'Amatic SC', cursive;
    padding: 4rem;
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-title-text);
  }
  button {
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
    text-shadow: 2px 2px 4px #000000;
    letter-spacing: 2px;
    font-size: 2rem;
  }
  button:hover {
    opacity: 0.8;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a{
    color: #FFFFFF;
  }
  @media (min-width: 768px) {
    max-width: 100vw;
    padding: 6rem 5rem;
    margin: 0 8rem;
    h1 {
      margin-bottom: 3.6rem;
    }
  }
`;