import React from 'react';
import {Item} from './style';
import { CardButton } from '../CardButton';
import { message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import api from '../../services/api';

const AdminItemCard = (props) => {
    const { confirm } = Modal;
    const cod_item = props.cod_item; 

    function showDeleteConfirm() {
        confirm({
          title: 'Você deseja excluir o item?',
          icon: <ExclamationCircleOutlined />,
          content: 'Excluir o item será uma ação permanente, não podendo ser revertido.',
          okText: 'Excluir',
          okType: 'danger',
          cancelText: 'Cancelar',
          onOk() {
            api.delete(`http://localhost:5000/item/delete/${cod_item}`, {data: {cod_item: cod_item}}).then(
                (req) => message.success('O item foi excluido!', 2));
          },
          onCancel() {
            console.log("Cancelado");
          },
        });
      }

    return(
        <Item>
            <img src={props.url} alt={props.nome}></img>
            <h2>{props.nome}</h2>
            <p>
                Doador:{props.doador} <br/> 
                Item Cadastrado em: {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(props.data)
                                )}
            </p>
            <CardButton  onClick={showDeleteConfirm} type="dashed">Excluir</CardButton>
        </Item>
    )
}

export default AdminItemCard;