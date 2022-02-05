import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const BodyContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex; 
   
    .changePhoto {
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
  }
  .changePhoto:hover {
    opacity: 0.8;
  }
`;

export const PhotoContainer = styled.div` 
    width: 40%; 
    height: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: flex-start;
    padding-top: 10rem;
    img{
        width: 200px;
        height: 200px;
    }


`;

export const DataContainer = styled.div`
    width: 60%; 
    height: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
`;

export const InputDiv = styled.div`
    width: 100%; 
    display: flex;
    justify-content: flex-end;
    padding-right: 20%;
    padding-bottom: 3rem; 

    label {
        padding-right: 2.5rem;
    }

    input {
        height: 3.5rem;
        width: 60%;
        border: 0.1rem solid var(--color-border);
        border-radius: 0.5rem;
        background: var(--color-input-background);
        padding-left: 2rem;
        
        :required {
        border-left-color: var(--color-primary);
        }
        
        :invalid {
        border-left-color: var(--color-border);
        }
    }
`;