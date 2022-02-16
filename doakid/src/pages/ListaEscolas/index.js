import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Card from '../../components/SchoolCard';
import {ContainerEscola, ContainerEscolaCadastrada} from './style'
import api from '../../services/api';

function ListaEscola() {
  const [escola, setEscola] = useState([]);

  useEffect(() => {
      api.get('http://localhost:5000/escola/list').then(response => {
        setEscola(response.data);
        console.log(escola);
      })
  }, []);
  return (
    <ContainerEscola>
        <Header></Header>
        <h1>Consulte escolas que recebem e fazem doações!</h1>
        <ContainerEscolaCadastrada>
          {escola.map(escola => (
            <Card 
              key={escola.cod_escola} 
              name={escola.nome_escola} 
              telefone={escola.numero}
              email={escola.email_escola}
              rua={escola.rua_escola}
              numero={escola.numero_rua}
              bairro={escola.bairro_escola}
            />))}
        </ContainerEscolaCadastrada>
    </ContainerEscola>
  );
}

export default ListaEscola;