import React, { useEffect, useState }  from 'react';
import { BodyContainer, Container, DataContainer, InputDiv, PhotoContainer } from './style';
import Header from '../../components/Header';
import userPhoto from '../../assets/user.png'
import api from "../../services/api";
import { message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

function AlterarDadosEscola() {
    const history = useHistory();
    const { confirm } = Modal;
    const userCode = localStorage.getItem('@doakid/userCode');
    const [nome_escola, setNomeEscola] = useState('');
    const [email_escola, setEmailEscola] = useState('');
    const [rua_escola, setRuaEscola] = useState('');
    const [numero_rua, setNumeroRua] = useState(0);
    const [bairro_escola, setBairroEscola] = useState('');
    const [horario_funcionamento_inicio, setHorarioAbertura] = useState('');
    const [horario_funcionamento_fim, setHorarioFechamento ] = useState('');
    const [horario, setHorario ] = useState('');
    const [numero, setNumero] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [novaSenhaConfirm, setNovaSenhaConfirma] = useState('');
  
    useEffect(() => {
        api.post(`http://localhost:5000/escola/user/${userCode}`, {cod_escola: userCode}).then(
          (response) => {
            setNomeEscola(response.data[0].nome_escola);
            setEmailEscola(response.data[0].email_escola);
            setRuaEscola(response.data[0].rua_escola);
            setNumeroRua(response.data[0].numero_rua);
            setBairroEscola(response.data[0].bairro_escola);
            setHorarioAbertura(response.data[0].horario_funcionamento_inicio);
            setHorarioFechamento(response.data[0].horario_funcionamento_fim);
            setNumero(response.data[0].numero);
            setSenha(response.data[0].senha)
            setSenhaAtual(response.data[0].senha)
            setNovaSenha(response.data[0].senha)
            setNovaSenhaConfirma(response.data[0].senha)
            setHorario(response.data[0].horario_funcionamento_inicio.substring(0, 5) + ' - ' + response.data[0].horario_funcionamento_fim.substring(0, 5))
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
                  history.push("/SchoolProfile");
                }
                if(novaSenha !== novaSenhaConfirm){
                  message.error("A nova senha está divergente!",2);
                  history.push("/SchoolProfile");
                } 
              }
              else {
                try {
                  const response = await api.put("http://localhost:5000/escola/update",
                  {
                    nome_escola, 
                    email_escola, 
                    rua_escola,
                    numero_rua, 
                    bairro_escola,
                    horario_funcionamento_inicio,
                    horario_funcionamento_fim,
                    userCode, 
                    numero
                  });
                  if(response.status === 200) {
                    message.success('Os dados foram alterados com Sucesso!', 2);
                    history.push("/SchoolProfile");
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
                <label>Nome da Escola: </label>
                <input
                type="name"
                placeholder="Nome da Escola"
                value= {nome_escola}
                onChange={(e) => setNomeEscola(e.target.value)}
                className="input"
                />
            </InputDiv>
            <InputDiv>
                <label>E-Mail: </label>
                <input
                type="email"
                placeholder="E-Mail"
                className="input"
                value= {email_escola}
                onChange={(e) => setEmailEscola(e.target.value)}
                />
            </InputDiv>
            <InputDiv>
                <label>Telefone: </label>
                <input
                type="name"
                placeholder="Telefone"
                className="input"
                value= {numero}
                onChange={(e) => setNumero(e.target.value)}
                />
            </InputDiv>
            <InputDiv>
                <label>Endereço: </label>
                <input
                type="text"
                placeholder="Endereço "
                className="input"
                value= {rua_escola}
                onChange={(e) => setRuaEscola(e.target.value)}
                />
            </InputDiv>
            <InputDiv>
                <label>Número: </label>
                <input
                type="number"
                placeholder="Número"
                className="input"
                value= {numero_rua}
                onChange={(e) => setNumeroRua(e.target.value)}
                />
            </InputDiv>
            <InputDiv>
                <label>Bairro: </label>
                <input
                type="text"
                placeholder="Bairro"
                className="input"
                value= {bairro_escola}
                onChange={(e) => setBairroEscola(e.target.value)}
                />
            </InputDiv>
            <InputDiv>
                <label>Horario de Funcionamento: </label>
                <input
                type="text"
                placeholder="Horario de Funcionamento"
                className="input"
                value= {horario}
                onChange={(e) => setHorario(e.target.value)}
                />
            </InputDiv>
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

export default AlterarDadosEscola;