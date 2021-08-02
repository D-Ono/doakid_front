import styled from 'styled-components';

export const SideLogin = styled.div`
  width: 40%;
  height: 100vh;
  background-color: var(--color-secondary-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h1 {
    margin-bottom: 2.6rem;
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    color: #FFFFFF;
  }
  h3 {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 500;
    color: #FFFFFF;
  }
  a{
    color: #FFFFFF;
    text-decoration: underline;
  }
  a:hover{
    color: #FF6400;
    text-decoration: underline;
  }
`;
