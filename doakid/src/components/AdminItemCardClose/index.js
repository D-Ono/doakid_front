import React from 'react';
import {Item} from './style';

const AdminItemCardClose = (props) => {

    return(
        <Item>
            <img src={props.url} alt={props.nome}></img>
            <h2>{props.nome}</h2>
            <p><strong>Descrição:</strong> {props.descricao}</p>
            <p>
                <strong>Doador:</strong>{props.doador} <br/> 
                <strong>Item Cadastrado em:</strong> {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(props.data)
                                )} <br/> 
                <strong>Item Doado em:</strong> {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(props.data_doacao)
                                )}
            </p>
        </Item>
    )
}

export default AdminItemCardClose;