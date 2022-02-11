import React, { useEffect, useState } from 'react';
import { BodyContainer, Container, DataContainer, InputDiv, PhotoContainer } from './style';
import Header from '../../components/Header';
import userPhoto from '../../assets/user.png'
import api from "../../services/api";
import { message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

function AlterarDados() {
  const history = useHistory();
  const { confirm } = Modal;
  const userCode = localStorage.getItem('@doakid/userCode');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email_familia, setEmailFamilia] = useState('');
  const [numero, setNumero] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [novaSenhaConfirm, setNovaSenhaConfirma] = useState('');
  
  useEffect(() => {
    api.post(`http://localhost:5000/familia/user/${userCode}`, {cod_familia: userCode}).then(
      (response) => {
        setNome(response.data[0].nome);
        setSobrenome(response.data[0].sobrenome);
        setEmailFamilia(response.data[0].email_familia);
        setNumero(response.data[0].numero);
        setSenha(response.data[0].senha)
        setSenhaAtual(response.data[0].senha)
        setNovaSenha(response.data[0].senha)
        setNovaSenhaConfirma(response.data[0].senha)
      });
    }, []);
    
    function showDeleteConfirm() {
      confirm({
        title: 'Você realmente deseja Alterar seus Dados?',
        icon: <ExclamationCircleOutlined />,
        content: 'Certifique se que os dados estão preenchidos corretamente, principlamente a senha.',
        okText: 'Alterar',
        okType: 'danger',
        cancelText: 'Cancelar',
        async onOk() {
          if(senha !== senhaAtual || novaSenha !== novaSenhaConfirm){
            if(senha !== senhaAtual){
              message.error("A Senha Atual está Incorreta. Os dados não foram alterados.", 3);
              history.push("/FamilyProfile");
            }
            if(novaSenha !== novaSenhaConfirm){
              message.error("A nova senha está divergente!",2);
              history.push("/FamilyProfile");
            } 
          }
          else {
            
            try {
              const response = await api.put("http://localhost:5000/familia/update",
              {
                nome, 
                sobrenome, 
                email_familia, 
                numero, 
                novaSenha, 
                userCode
              });
              if(response.status === 200) {
                message.success('Os dados foram alterados com Sucesso!', 2);
                history.push("/FamilyProfile");
              }
            } catch (error) {
              console.log(error)
              console.log(error.response);
            }
          }
        },
        onCancel() {
          console.log("Cancelado");
        },
      });
    }

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
            <label>Primeiro Nome: </label>
            <input
              type="name"
              value= {nome}
              onChange={(e) => setNome(e.target.value)}
              className="input"
            />
          </InputDiv>
          <InputDiv>
            <label>Sobrenome: </label>
            <input
              type="name"
              value= {sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              className="input"
            />
          </InputDiv>
          <InputDiv>
            <label>E-Mail: </label>
            <input
              type="email"
              value={email_familia }
              onChange={(e) => setEmailFamilia(e.target.value)}
              className="input"
            />
          </InputDiv>
          <InputDiv>
            <label>Telefone: </label>
            <input
              type="name"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              className="input"
            />
          </InputDiv>
          <br/>
          <InputDiv>
            <label>Senha atual: </label>
            <input
              type="password"
              placeholder="Senha Atual"
              className="input"
              onChange={(e) => setSenhaAtual(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <label>Nova Senha: </label>
            <input
              type="password"
              placeholder="Nova Senha"
              className="input"
              onChange={(e) => setNovaSenha(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <label>Confirme a Nova Senha: </label>
            <input
              type="password"
              placeholder="Nova Senha"
              className="input"
              onChange={(e) => setNovaSenhaConfirma(e.target.value)}
            />
          </InputDiv>
            <button className="changePhoto" onClick={showDeleteConfirm} type="dashed">Alterar Dados</button>
          </DataContainer>
        </BodyContainer>
      </Container>
  );
}

export default AlterarDados;