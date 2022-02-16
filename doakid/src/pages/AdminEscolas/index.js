import React, { useState, useEffect } from 'react';
import { Container, MainContainer, SchoolContainer } from './style';
import AdminHeader from '../../components/AdminHeader';
import AdminMenu from '../../components/AdminMenu';
import AdminSchoolCard from '../../components/AdminSchoolCard';
import { AdminTitle } from '../../components/AdminTitle';
import api from "../../services/api";

function AdminEscolas() {
  const [escola, setEscola] = useState([]);

  useEffect(() => {
    api.get("http://localhost:5000/escola/list").then((response) => {
      setEscola(response.data);
    });
  }, );

    return (
      <Container>
        <AdminHeader></AdminHeader>
        <MainContainer>
            <AdminMenu></AdminMenu>
            <div className='MainContent'>
              <AdminTitle>Escolas Cadastradas</AdminTitle>
              <SchoolContainer>
                {escola.map(escola => (
                  <AdminSchoolCard 
                    key={escola.cod_escola} 
                    cod_escola={escola.cod_escola} 
                    name={escola.nome_escola} 
                    telefone={escola.numero}
                    email={escola.email_escola}
                    rua={escola.rua_escola}
                    numero={escola.numero_rua}
                    bairro={escola.bairro_escola}
                    aberto={escola.horario_funcionamento_inicio}
                    fechado={escola.horario_funcionamento_fim}
                  />))}
              </SchoolContainer>
            </div>
        </MainContainer>
      </Container>
    );
}

export default AdminEscolas;