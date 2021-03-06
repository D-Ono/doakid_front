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

function FamilyProfile() {
  const history = useHistory();
  const userCode = localStorage.getItem('@doakid/userCode');
  const { confirm } = Modal;
  const [user, setUser] = useState([]);
  const [itensDisponiveis, setItensDisponiveis] = useState([]);
  const [itensDoados, setItensDoados] = useState([]);

  useEffect(() => {
    api.post(`http://localhost:5000/familia/user/${userCode}`, {cod_familia: userCode}).then(
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
        api.delete(`http://localhost:5000/familia/delete/${userCode}`, {data: {cod_familia: userCode}}).then(
            () => {
              message.success('A sua conta no Doakid foi excluída!', 2)
              history.push("/");
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
              <h1>Olá, {user.nome + " " + user.sobrenome}  </h1> 
              <h2>E-Mail: {user.email_familia }</h2>
              <h2>Telefone: {user.numero}</h2>
             </div>
          </div>
          <div className='buttonContainer'>
            <Button><Link exact to="/AlterarDados">Alterar Dados</Link></Button>
            <Button className='deleteUser'  onClick={showDeleteConfirm} type="dashed">Excluir a Conta</Button>
          </div>
          <ItemContainer>
            {
              <UserItemContainer>
                <h1>Seus Itens Disponíveis</h1>
                <hr/>
                <ItemContainer>
                {
                  (itensDisponiveis == 0) ? 
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

export default FamilyProfile;