import React from 'react';
import {Container} from './style';
import { CardButton } from '../CardButton';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import api from '../../services/api';
import { message, Modal } from 'antd';

const AdminUserCard = (props) => {
    const { confirm } = Modal;
    const cod_familia = props.cod_familia; 

    function showDeleteConfirm() {
        confirm({
          title: 'Você deseja excluir a escola do Sistema?',
          icon: <ExclamationCircleOutlined />,
          content: 'Excluir a Escola será uma ação permanente, não podendo ser revertido.',
          okText: 'Excluir',
          okType: 'danger',
          cancelText: 'Cancelar',
          onOk() {
            api.delete(`http://localhost:5000/familia/delete/${cod_familia}`, {data: {cod_familia: cod_familia}}).then(
                () => message.success('O Usuario foi excluido!', 2) )
          },
          onCancel() {
            console.log("Cancelado");
          },
        });
      }

    return(
        <Container>
            <h3><strong>Nome:</strong> {props.name}</h3>
            <h3><strong>Telefone:</strong> {props.telefone}</h3>
            <h3><strong>E-Mail:</strong> {props.email}</h3>
            <div>
              <CardButton onClick={showDeleteConfirm} type="dashed">Excluir</CardButton>
            </div>
        </Container>
    )
}

export default AdminUserCard;