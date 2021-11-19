import React from 'react';
import {Item} from './style';

const ItemCard = (props) => {

    return(
        <Item>
            <img src={props.url} alt={props.nome}></img>
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <button>Ver Contato</button>
        </Item>
    )
}

export default ItemCard;