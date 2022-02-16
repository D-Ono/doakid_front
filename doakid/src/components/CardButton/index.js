import styled from "styled-components";
import "@fontsource/amatic-sc";

export const CardButton = styled.button`
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

  button:target {
    background: var(--color-button-background);
    color: #FFFFFF;
    border: 0;
    border-radius: 0.6rem;
  }
`;