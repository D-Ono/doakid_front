import React, { useEffect, useState } from 'react';
import { ProfileContainer, ItemContainer, UserItemContainer } from './style';
import Header from '../../components/Header';
import userPhoto from '../../assets/user.png'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import api from "../../services/api";
import ItemCardUser from '../../components/ItemCardUser';
import ItemCardUserClose from '../../components/ItemCardUserClose';
import { message, Modal } from 'antd';
import { useHistory } from "react-router-dom";
import { ExclamationCircleOutlined } from '@ant-design/icons';

function SchoolProfile() {
  const history = useHistory();
  const { confirm } = Modal;
  const userCode = localStorage.getItem('@doakid/userCode');
  console.log(userCode);
  const [user, setUser] = useState([]);
  const [itensDisponiveis, setItensDisponiveis] = useState([]);
  const [itensDoados, setItensDoados] = useState([]);

  useEffect(() => {
    api.post(`http://localhost:5000/escola/user/${userCode}`, {cod_escola: userCode}).then(
      (response) => {
        setUser(response.data[0]);
    });
  }, []);

  useEffect(() => {
    api.get("http://localhost:5000/item/openList").then((response) => {
      setItensDisponiveis(response.data.filter((item) => item.cod_Usuario == userCode));
    });
    api.get("http://localhost:5000/item/closeList").then((response) => {
      setItensDoados(response.data.filter((item) => item.cod_Usuario == userCode));
      console.log(response.data)
    });
  }, [itensDisponiveis]);

  function showDeleteConfirm() {
    confirm({
      title: 'Você realmente deseja excluir a conta?',
      icon: <ExclamationCircleOutlined />,
      content: 'Excluir sua conta irá apagar todos os seus itens disponíveis para doação e será uma ação irreversível.',
      okText: 'Excluir',
      okType: 'danger',
      cancelText: 'Cancelar',
      onOk() {
        api.delete(`http://localhost:5000/escola/delete/${userCode}`, {data: {cod_escola: userCode}}).then(
            (response) => {
              if(response.status === 200){
                message.success('A sua conta no Doakid foi excluída!', 2)
                history.push("/");
              }
            } )
      },
      onCancel() {
        console.log("Cancelado");
      },
    });
  }

  return (
      <ProfileContainer>
        <Header></Header>
        <div className='mainContainer'>
          <div className="perfil">  
            <img src={userPhoto} alt="Foto de perfil"></img>            
            <div className="detalhes-perfil">
              <h1>Olá, {user.nome_escola}  </h1> 
              <h2>E-Mail: {user.email_escola} </h2>
              <h2>Telefone: {user.numero}</h2>
              <h2>Rua: {user.rua_escola} Nº {user.numero_rua}</h2>
              <h2>Bairro: {user.bairro_escola}</h2>
              <h2>Horario de Funcionamento: {user.horario_funcionamento_inicio} - {user.horario_funcionamento_fim} </h2>
             </div>
          </div>
          <div className='buttonContainer'>
            <Button><Link exact to="/AlterarDadosEscola">Alterar Dados</Link></Button>
            <Button className='deleteUser'  onClick={showDeleteConfirm} type="dashed">Excluir a Conta</Button>
          </div>
          <ItemContainer>
            {
              <UserItemContainer>
                <h1>Seus Itens Disponíveis</h1>
                <hr/>
                <ItemContainer>
                {
                  itensDisponiveis == 0 ? 
                    <h2>Você não tem nenhum item para doação Disponível! </h2>
                  :
                  itensDisponiveis.map((item) => (
                    <ItemCardUser
                      key={item.cod_item}
                      cod_item={item.cod_item}
                      nome={item.nome_item}
                      descricao={item.descricao_item}
                      url={item.url}
                      data={item.data_registro}
                    />
                  ))
                }
                </ItemContainer>
              </UserItemContainer>
            }
            {
              <UserItemContainer>
                <h1>Seus Itens Doados</h1>
                <hr/>
                <ItemContainer>
                {
                  (itensDoados == 0) ?
                    <h2>Você ainda não doou nenhum item :( </h2>
                  :
                  itensDoados.map((item) => (
                    <ItemCardUserClose
                      key={item.cod_item}
                      nome={item.nome_item}
                      url={item.url}
                      data={item.data_registro}
                      descricao={item.descricao_item}
                      data_doacao={item.data_doacao}
                    />
                  ))
                }
                </ItemContainer>
              </UserItemContainer>
            }

          </ItemContainer>
        </div>
      </ProfileContainer>
  );
}

export default SchoolProfile;