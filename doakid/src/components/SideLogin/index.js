import styled from 'styled-components';
import "@fontsource/amatic-sc";

export const SideLogin = styled.div`
  width: 40%;
  height: 100vh;
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(156,45,253,1) 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 10rem;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px #E5D705;
    margin-top: 6.6rem;
    margin-bottom: 2.6rem;
    text-align: center;
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
    color: #E5D705;
    text-decoration: underline;
  }
`;
