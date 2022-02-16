import React from 'react';
import {Item} from './style';

const ItemCardUserClose = (props) => {
    return(
        <Item>
            <img src={props.url} alt={props.nome}></img>
            <h2>{props.nome}</h2>
            <p>
                <strong></strong>Descrição: {props.descricao} <br/><br/>
                <strong>Item Cadastrado em:</strong> {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(props.data)
                                )}<br/>
                <strong>Item Doado em:</strong> {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(props.data_doacao)
                                )}
            </p>
        </Item>
    )
}

export default ItemCardUserClose;