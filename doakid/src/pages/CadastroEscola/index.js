import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import { Register, RegisterContainer } from './style';
import { SideLogin } from '../../components/SideLogin'
import promiseImage from "../../assets/promise.svg";
import { Button } from 'antd';
import api from '../../services/api';

function RegisterSchoolPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);
  const [district, setDistrict] = useState('');
  const [telephone, setTelephone] = useState('');
  const [openCloseSchool, setOpenCloseSchool] = useState('');
  const [nome, setNome] = useState('');

  function myRandom(min, max, multiple) {
    return Math.round(Math.random() * (max - min) / multiple) * multiple + min;
  }
  let codigoEscola;
  let inicio = '09:00:00', fim = '18:00:00';

function handleSubmit(e) {
  codigoEscola = myRandom(1, 50000, 2);
  inicio = openCloseSchool.substring(0, 2) + ':00:00';
  fim = openCloseSchool.substring(6, 8) + ':00:00';
  try {
    const response = api.post('http://localhost:5000/escola/create',
    {
      codigoEscola: codigoEscola,
      nome: nome,
      email: email, 
      senha: password, 
      rua_escolas: address, 
      numero_rua: number,
      bairro: district, 
      inicio: inicio, 
      fim: fim, 
      numeroTelefone: telephone,
    });    
  } catch (error) {
    alert(error)
  }
  localStorage.setItem('@doakid/userCode', codigoEscola);
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
          <h1>Cadastrar Escola</h1>
          <div>
            <Button><Link to="/CadastroEscola">Escola</Link></Button>
            <Button><Link to="/Cadastro">Usuarios</Link></Button>
          </div>
          <div className="input-escola">
            <Input
              name="nome"
              placeholder="Nome da Escola"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
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
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
          <Input
            name="Numero"
            placeholder="Numero"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required
          />
          </div>
          <div className="input-escola">
          <Input
            name="Bairro"
            placeholder="Bairro"
            value={district}
            onChange={e => setDistrict(e.target.value)}
            required
          />
          <Input
            name="Telefone"
            placeholder="Telefone"
            value={telephone}
            onChange={e => setTelephone(e.target.value)}
          />
          </div>  
          <div className="input-escola">
            <Input
              name="Horario"
              placeholder="Escola abre e fecha às (08:00-17:00)"
              value={openCloseSchool}
              onChange={e => setOpenCloseSchool(e.target.value)}
            />
          </div>
          <button className="buttonSubmit" type="submit">Cadastrar</button>
        </form>
      </RegisterContainer>
    </Register>
  );
}

export default RegisterSchoolPage;