import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Input from '../../components/Input';
import { Register, RegisterContainer } from './style';
import { SideLogin } from '../../components/SideLogin'
import promiseImage from "../../assets/promise.svg";
import { Button } from 'antd';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Register>
      <SideLogin>
        <h1>DoaKid</h1>
        <h3>Já tem uma conta? <Link to='/'>Entre aqui.</Link></h3>
        <img src={promiseImage} height="300px" width="300px" alt="Imagem de Solidariedade"></img>
       </SideLogin>
      <RegisterContainer>
        <form>
          <h1>Cadastre-se</h1>
          <div>
            <Button><Link to="/CadastroEscola">Escola</Link></Button>
            <Button><Link to="/Cadastro">Usuarios</Link></Button>
          </div>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Input
            type="telefone"
            name="telefone"
            placeholder="Telefone"
          />
          <button className="buttonSubmit" type="submit">Cadastrar</button>
        </form>
      </RegisterContainer>
    </Register>
  );
}

export default RegisterPage;