import styled from 'styled-components';

export const Item = styled.div`
  width:  250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  background-color: #FFFFFF;
  border-radius: 0.4rem;
  img{
    width:200px;
    height:200px;
    box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
    border-radius: 0.4rem;
  }

  h2{
    margin-top: 10px;
  }
  p{
    text-align: center;
  }
`;