import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Input from '../../components/Input';
import { LoginPage, LoginContainer } from './style';
import { SideLogin } from '../../components/SideLogin'
import promiseImage from "../../assets/promise.svg";
import api from '../../services/api';
import { login } from '../../services/auth'; //<Link to='/Inicio'>Entrar</Link>
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email_escola, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [email_familia, setEmailFamilia] = useState('');
  const [user, setUser] = useState('');

async function handleSubmit(e) {
  e.preventDefault();
  if(email_escola == "admin@admin"){
    history.push("/AdminInfo");
  }
  if(user === "Escola"){
    console.log("aba");
    try {
      const response = await api.post('http://localhost:5000/escola/login',
      {
        email_escola,
        senha
      });
      if(response.status === 200) {
        login(response.data.token);
        console.log(response.data[0]);
        localStorage.setItem('@doakid/userCode', response.data[0].cod_escola);
        history.push("/Inicio");
      }
    } catch (error) {
      alert("Matricula ou Senha Incorretos!")
    }
  }else if (user === "Usuarios"){
    try {
      const response = await api.post('http://localhost:5000/familia/login',
      {
        email_familia,
        senha
      });
      console.log("teste");
      if(response.status === 200) {
        login(response.data.token);
        console.log(response.data);
        localStorage.setItem('@doakid/userCode', response.data[0].cod_familia);
        history.push("/Inicio");
      }
    } catch (error) {
      alert("Matricula ou Senha Incorretos!")
    }
  }
    
}

  return (
    <LoginPage>
      <SideLogin>
        <h1 class="doakid-title">DoaKid</h1>
        <h3>Ainda não tem uma conta? <br/> <Link to='/Cadastro'>Faça seu cadastro aqui!</Link></h3>
        <img src={promiseImage} height="300px" width="300px" alt="Imagem de Solidariedade"></img>
       </SideLogin>
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <h1>Faça login!</h1>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email_escola}
            onChange={e => {setEmail(e.target.value); setEmailFamilia(e.target.value)}}
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
          <div  onChange={(e) => setUser(e.target.value) }>
            <input type="radio" id="html" name="fav_language" value="Usuarios"/>
            <label for="html">Usuarios</label>
            <input type="radio" id="css" name="fav_language" value="Escola"/>
            <label for="css">Escola</label>
          </div>
          <button type="submit">Entrar</button>
        </form>
      </LoginContainer>
    </LoginPage>
  );
}

export default Login;