import React from 'react';
import Header from '../../components/Header';
import {ContainerEscola, ContainerEscolaCadastrada} from './style'
import escola from '../../assets/school.png'

function ListaEscola() {

  return (
    <ContainerEscola>
        <Header></Header>
        <div>
          <h1>Consulte escolas que recebem doações!</h1>
          <ContainerEscolaCadastrada>
              <div className="escola">
                <img src={escola} alt="Imagem da Escola"></img>
                <div className="detalhes-escola">
                  <h2><strong>Nome:</strong> Marrey Junior</h2>
                  <h2><strong>Telefone:</strong> (18)3223-9865</h2>
                  <h2><strong>E-Mail:</strong> marrey_junior@gmail.com</h2>
                  <h2><strong>Endereço:</strong> Coronel Albino, 1639</h2>
                  <h2><strong>Bairro:</strong> São Judas Tadeu</h2>
                  <h2><strong>Horario de Funcionamento:</strong> Das 8h00 às 17h00</h2>
                </div>
              </div>
            </ContainerEscolaCadastrada>
        </div>
    </ContainerEscola>
  );
}

export default ListaEscola;