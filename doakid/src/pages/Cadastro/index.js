import React, { useState } from 'react';
import {Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import { Register, RegisterContainer } from './style';
import { SideLogin } from '../../components/SideLogin'
import promiseImage from "../../assets/promise.svg";
import { Button } from 'antd';
import api from '../../services/api';
import { login } from '../../services/auth';

function RegisterPage() {
  const [email_familia, setEmail_Familia] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [numero, setNumero] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    let cod_familia = Math.floor(Math.random() * 5000);
    let sobrenome = "Leifert";
    let nome = "David"
    e.preventDefault();
    console.log(nome)
    const data = {
      cod_familia,
      nome,
      sobrenome, 
      email_familia, 
      senha, 
      numero
    }
    try {
      const response = await api.post('http://localhost:5000/familia/create', data);
      //console.log(Object.values(response.data)[0].hasOwnProperty('cod_orientador'));
      if(response.status === 200) {
        login(response.data.token);
        localStorage.setItem('@doakid/username', response.data[0].nome);
        localStorage.setItem('@doakid/email', response.data[0].email_familia);
        history.push("/Inicio");
      }
    } catch (error) {
      alert(error)
    }
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
            value={nome}
            onChange={e => setNome(e.target.value)}
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