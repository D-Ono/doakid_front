import React from 'react';
import {Container} from './style';

const AdminUserCard = (props) => {

    return(
        <Container>
            <h2><strong>Nome:</strong> {props.name}</h2>
            <h2><strong>Telefone:</strong> {props.telefone}</h2>
            <h2><strong>E-Mail:</strong> {props.email}</h2>
            <button>Excluir</button>
        </Container>
    )
}

export default AdminUserCard;