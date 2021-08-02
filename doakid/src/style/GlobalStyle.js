import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
    --color-background: #F9F9F9;
    --color-secondary-background: #6A0DAD;
    --color-input-background: #E9E9E9; 
    --color-button-background: #6A0DAD;
    --color-primary-text: #1F4652;
    --color-secondary-text: #FFFFFF;
    --color-title-text: #0F2127;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, 
  body, 
  #root {
    height: 100vh;
    width: 100vw;
  }
  body {
    background-color: var(--color-background);
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  button,
  input,
  textarea {
    font-family: Roboto;
    line-height: 2.4rem;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;