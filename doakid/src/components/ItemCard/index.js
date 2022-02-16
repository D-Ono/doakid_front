import React, {useState} from 'react';
import {Item} from './style';
import { CardButton } from '../CardButton';
import { Modal } from 'antd';
import api from "../../services/api";

const ItemCard = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [user, setUser] = useState({});
    const userCode = props.cod_Usuario; 

    function showModal() {
        setIsModalVisible(true);
        if(userCode%2 === 0){ //Familia
            api.post(`http://localhost:5000/familia/user/${userCode}`, {cod_familia: userCode}).then(
                (response) => {
                setUser(response.data[0]);
            });
        }else { //Escola
            api.post(`http://localhost:5000/escola/user/${userCode}`, {cod_escola: userCode}).then((response) => {
                setUser(response.data[0]);
            });
        }
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    
    return(
        <Item>
            <img src={props.url} alt={props.nome}></img>
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <CardButton  type="button" onClick={showModal}>Ver Contato</CardButton>
            <Modal title="Contato do Doador" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                { 
                userCode%2 === 0 ? 
                    <div>
                        <h3><strong>Nome:</strong> {user.nome + " " + user.sobrenome }</h3>
                        <h3><strong>E-Mail:</strong> {user.email_familia }</h3>
                        <h3><strong>Telefone:</strong> {user.numero}</h3>
                        
                    </div> 
                : 
                    <div>
                        <h3><strong>Nome:</strong> {user.nome_escola}</h3>
                        <h3><strong>Telefone:</strong> {user.numero}</h3>
                        <h3><strong>E-Mail:</strong> {user.email_escola}</h3>
                        <h3><strong>Endereço:</strong> {user.rua_escola} <strong>Nº:</strong> {user.numero_rua} </h3>
                        <h3><strong>Bairro:</strong> {user.bairro_escola}</h3>
                        <h3><strong>Horario de Funcionamento:</strong> Das {user.horario_funcionamento_inicio} às {user.horario_funcionamento_fim}</h3>
                    </div>
                }
            </Modal>
        </Item>
    )
}

export default ItemCard;