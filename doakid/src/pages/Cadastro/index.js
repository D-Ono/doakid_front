import React, { useState } from 'react';
import {Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import { Register, RegisterContainer } from './style';
import { SideLogin } from '../../components/SideLogin'
import promiseImage from "../../assets/promise.svg";
import { Button } from 'antd';
import api from '../../services/api';

function RegisterPage() {
  const [email_familia, setEmail_Familia] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [senha, setSenha] = useState('');
  const [numero, setNumero] = useState('');
  const history = useHistory();
  let nome, sobrenome, cod_familia, nomeCompletoArray
  function myRandom(min, max, multiple) {
    return Math.round(Math.random() * (max - min) / multiple) * multiple + min;
    
  }
  function handleSubmit(e) {
    nomeCompletoArray = nomeCompleto.split(' ');
    nome = nomeCompletoArray[0];
    sobrenome = nomeCompletoArray[1];
    cod_familia = myRandom(0, 50000, 2);
    try {
      const response = api.post('http://localhost:5000/familia/create', {
        cod_familia,
        nome,
        sobrenome,
        email_familia, 
        senha, 
        numero
      });
        
    } catch (error) {
      alert(error)
    }
    console.log(cod_familia)
    localStorage.setItem('@doakid/userCode', cod_familia);
    history.push("/Inicio");
  }

  return (
    <Register>
      <SideLogin>
        <h1>DoaKid</h1>
        <h3>Já tem uma conta? <Link to='/'>Entre aqui!</Link></h3>
        <img src={promiseImage} height="300px" width="300px" alt="Imagem de Solidariedade"></img>
       </SideLogin>
      <RegisterContainer>
        <form onSubmit={handleSubmit}>
          <h1>Faça o seu cadastro!</h1>
          <div>
            <Button><Link to="/CadastroEscola">Escola</Link></Button>
            <Button><Link to="/Cadastro">Usuarios</Link></Button>
          </div>
          <Input
            type="name"
            name="nome"
            placeholder="Nome Completo "
            value={nomeCompleto}
            onChange={e => setNomeCompleto(e.target.value)}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email_familia}
            onChange={e => setEmail_Familia(e.target.value)}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
          <Input
            type="telefone"
            name="telefone"
            placeholder="Telefone"
            value={numero}
            onChange={e => setNumero(e.target.value)}
            required
          />
          <button className="buttonSubmit" type="submit">Cadastrar</button>
        </form>
      </RegisterContainer>
    </Register>
  );
}

export default RegisterPage;