import React from 'react';
import { Container, FrameContainer, MainContainer } from './style';
import AdminHeader from '../../components/AdminHeader';
import AdminMenu from '../../components/AdminMenu';
import InfoFrame from '../../components/AdminInfoFrame';
import { AdminTitle } from '../../components/AdminTitle';

function AdminInfo() {
    const username = localStorage.getItem('@doakid/username');
    const email = localStorage.getItem('@doakid/email');

    return (
      <Container>
        <AdminHeader></AdminHeader>
        <MainContainer>
            <AdminMenu></AdminMenu>
            <div className='MainContainer'>
              <AdminTitle>Informações Gerais</AdminTitle>
              <FrameContainer>
                <InfoFrame title="Itens Disponiveis"/>
                <InfoFrame title="Itens Doados"/>
                <InfoFrame title="Usuarios Cadastrados"/>
                <InfoFrame title="Escolas Cadastradas"/>
              </FrameContainer>
            </div>
        </MainContainer>
      </Container>
    );
}

export default AdminInfo;