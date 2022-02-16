import React from 'react'; 
import { Container } from './style';

export default function InfoFrame(props) {
    return(
        <Container>
            <h2>{props.title}</h2>
            <h1>{props.value}</h1>
        </Container>
    );
}