import React from 'react';
import {Container} from './style';

const Card = (props) => {

    return(
        <Container>
            <h2><strong>Nome:</strong> {props.name}</h2>
            <h2><strong>Telefone:</strong> {props.telefone}</h2>
            <h2><strong>E-Mail:</strong> {props.email}</h2>
            <h2><strong>Endereço:</strong> {props.rua} <strong>Nº:</strong> {props.numero_rua} </h2>
            <h2><strong>Bairro:</strong> {props.bairro}</h2>
            <h2><strong>Horario de Funcionamento:</strong> Das 8h00 às 17h00</h2>
        </Container>
    )
}

export default Card;