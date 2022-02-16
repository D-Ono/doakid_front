import React from 'react';
import {Item} from './style';
import { CardButton } from '../CardButton';
import { message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import api from '../../services/api';

const ItemCardUser = (props) => {
  const today = new Date(); 
  const data = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
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
            api.delete(`http://localhost:5000/item/delete/${cod_item}`, {data: {data_doacao: data, cod_item: cod_item}}).then(
                (req) => message.success('O item foi excluido!', 2));
          },
          onCancel() {
            console.log("Cancelado");
          },
        });
      }

      function showDonateConfirm() {
        confirm({
          title: 'Você doou o item?',
          icon: <ExclamationCircleOutlined />,
          content: 'Confirme caso tenha doado realmente o item.',
          okText: 'Doei',
          okType: 'danger',
          cancelText: 'Cancelar',
          onOk() {
            api.put(`http://localhost:5000/item/donate`, {data_doacao: data, cod_item: cod_item}).then(
                (req) => message.success('Que bom, você doou um item!', 2));
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
                Descrição: {props.descricao} <br/>
                Item Cadastrado em: {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(props.data)
                                )}
            </p>
            <div className='bContainer'>
              <CardButton className='donateItem' onClick={showDonateConfirm} type="dashed">Doei!</CardButton>
              <CardButton className='deleteUser' onClick={showDeleteConfirm} type="dashed">Excluir</CardButton>
            </div>
        </Item>
    )
}

export default ItemCardUser;