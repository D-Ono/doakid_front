import React from 'react';
import {Item} from './style';

const AdminItemCard = (props) => {

    return(
        <Item>
            <img src={props.url} alt={props.nome}></img>
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <button>Excluir</button>
        </Item>
    )
}

export default AdminItemCard;