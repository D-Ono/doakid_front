import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Input from '../../components/Input';
import { Register, RegisterContainer } from './style';
import { SideLogin } from '../../components/SideLogin'
import promiseImage from "../../assets/promise.svg";
import { Button } from 'antd';

function RegisterSchoolPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Register>
      <SideLogin>
        <h1>DoaKid</h1>
        <h3>Já tem uma conta? <Link to='/'>Entre aqui!</Link></h3>
        <img src={promiseImage} height="300px" width="300px" alt="Imagem de Solidariedade"></img>
       </SideLogin>
      <RegisterContainer>
        <form>
          <h1>Cadastrar Escola</h1>
          <div>
            <Button><Link to="/CadastroEscola">Escola</Link></Button>
            <Button><Link to="/Cadastro">Usuarios</Link></Button>
          </div>
          <div className="input-escola">
            <Input
              name="nome"
              placeholder="Nome da Escola"
            />
            <Input
              name="codigo"
              placeholder="Código da Escola"
            />
          </div>
          <div className="input-escola">
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
          </div>
          <div className="input-escola">
          <Input
            name="Rua"
            placeholder="Rua"
          />
          <Input
            name="Numero"
            placeholder="Numero"
          />
          </div>
          <div className="input-escola">
          <Input
            name="Bairro"
            placeholder="Bairro"
          />
          <Input
            name="Telefone"
            placeholder="Telefone"
          />
          </div>  
          <div className="input-escola">
            <Input
              name="Horario"
              placeholder="Escola abre às..."
            />
            <Input
              name="Horario"
              placeholder="Escola fecha às..."
            />
          </div>
          <button className="buttonSubmit" type="submit">Cadastrar</button>
        </form>
      </RegisterContainer>
    </Register>
  );
}

export default RegisterSchoolPage;