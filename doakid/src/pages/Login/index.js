import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Input from '../../components/Input';
import { LoginPage, LoginContainer } from './style';
import { SideLogin } from '../../components/SideLogin'
import promiseImage from "../../assets/promise.svg";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginPage>
      <SideLogin>
        <h1>DoaKid</h1>
        <h3>Ainda não tem uma conta? <Link to='/Cadastro'>Cadastre-se aqui.</Link></h3>
        <img src={promiseImage} height="300px" width="300px" alt="Imagem de Solidariedade"></img>
       </SideLogin>
      <LoginContainer>
        <form>
          <h1>Login</h1>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit"><Link to='/Inicio'>Entrar</Link></button>
        </form>
      </LoginContainer>
    </LoginPage>
  );
}

export default Login;