import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    .MainContent {
        display: flex; 
        flex-direction: column; 
        align-items: center;
    }
`;

export const ItemContainer = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    align-items: center; 
    margin-top: 5rem;
`;