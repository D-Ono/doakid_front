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

    .MainContainer {
        display: flex; 
        flex-direction: column; 
        align-items: center;
    }
`;

export const FrameContainer = styled.div`
    height: 80vh;
    margin-top: 5rem;
    display: flex; 
    flex-wrap: wrap;
    align-items: start; 
    justify-content: space-around;
`;