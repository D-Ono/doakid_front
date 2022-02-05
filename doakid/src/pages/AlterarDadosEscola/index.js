import React from 'react';
import { BodyContainer, Container, DataContainer, InputDiv, PhotoContainer } from './style';
import Header from '../../components/Header';
import userPhoto from '../../assets/user.png'

function AlterarDados() {
  const username = localStorage.getItem('@doakid/username');
  const email = localStorage.getItem('@doakid/email');

  return (
      <Container>
        <Header></Header>
        <BodyContainer>
          <PhotoContainer>
            <img src={userPhoto} alt="Foto de perfil"></img>   
            <button className="changePhoto">Alterar Foto</button>
          </PhotoContainer>
          <DataContainer>
            <InputDiv>
                <label>Nome da Escola: </label>
                <input
                type="name"
                placeholder="Nome da Escola"
                className="input"
                />
            </InputDiv>
            <InputDiv>
                <label>E-Mail: </label>
                <input
                type="email"
                placeholder="E-Mail"
                className="input"
                />
            </InputDiv>
            <InputDiv>
                <label>Telefone: </label>
                <input
                type="name"
                placeholder="Telefone"
                className="input"
                />
            </InputDiv>
            <InputDiv>
                <label>Endereço: </label>
                <input
                type="text"
                placeholder="Endereço "
                className="input"
                />
            </InputDiv>
            <InputDiv>
                <label>Número: </label>
                <input
                type="number"
                placeholder="Número"
                className="input"
                />
            </InputDiv>
            <InputDiv>
                <label>Bairro: </label>
                <input
                type="text"
                placeholder="Bairro"
                className="input"
                />
            </InputDiv>
            <InputDiv>
                <label>Horario de Funcionamento: </label>
                <input
                type="text"
                placeholder="Horario de Funcionamento"
                className="input"
                />
            </InputDiv>
            <InputDiv>
                <label>Senha atual: </label>
                <input
                type="password"
                placeholder="Senha Atual"
                className="input"
                />
            </InputDiv>
            <InputDiv>
                <label>Nova Senha: </label>
                <input
                type="password"
                placeholder="Nova Senha"
                className="input"
                />
            </InputDiv>
            <InputDiv>
                <label>Confirme a Nova Senha: </label>
                <input
                type="password"
                placeholder="Nova Senha"
                className="input"
                />
            </InputDiv>
            <button className="changePhoto">Alterar Dados</button>
          </DataContainer>
        </BodyContainer>
      </Container>
  );
}

export default AlterarDados;