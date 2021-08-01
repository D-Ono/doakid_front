import styled from 'styled-components';

export const Register = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    padding: 4rem;
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-title-text);
  }
  .buttonSubmit {
    width: 20rem;
    height: 5.6rem;
    background: var(--color-button-background);
    color: var(--color-highlight-text);
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
  button:hover {
    opacity: 0.8;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
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