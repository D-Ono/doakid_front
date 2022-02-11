import React from 'react';
import {Container} from './style';
import { CardButton } from '../CardButton';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import api from '../../services/api';
import { message, Modal } from 'antd';

const AdminSchoolCard = (props) => {
    const { confirm } = Modal;
    const cod_escola = props.cod_escola; 

    function showDeleteConfirm() {
        confirm({
          title: 'Você deseja excluir a escola do Sistema?',
          icon: <ExclamationCircleOutlined />,
          content: 'Excluir a Escola será uma ação permanente, não podendo ser revertido.',
          okText: 'Excluir',
          okType: 'danger',
          cancelText: 'Cancelar',
          onOk() {
            api.delete(`http://localhost:5000/escola/delete/${cod_escola}`, {data: {cod_escola: cod_escola}}).then(
                () => message.success('A Escola foi excluida!', 2) )
          },
          onCancel() {
            console.log("Cancelado");
          },
        });
      }

    return(
        <Container>
            <h3><strong>Nome:</strong> {props.name}</h3>
            <h3><strong>E-Mail:</strong> {props.email}</h3>
            <h3><strong>Telefone:</strong> {props.telefone}</h3>
            <h3><strong>Endereço:</strong> {props.rua} <strong>Nº:</strong> {props.numero} </h3>
            <h3><strong>Bairro:</strong> {props.bairro}</h3>
            <h3><strong>Horario de Funcionamento:</strong> Das {props.aberto} às {props.fechado}</h3>
            <div>
              <CardButton onClick={showDeleteConfirm} type="dashed">Excluir</CardButton>
            </div>
        </Container>
    )
}

export default AdminSchoolCard;