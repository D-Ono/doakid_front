import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const Header = styled.div`
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
`;