import React from 'react';
import { Container, MainContainer } from './style';
import AdminHeader from '../../components/AdminHeader';
import AdminMenu from '../../components/AdminMenu';
import AdminSchoolCard from '../../components/AdminSchoolCard';
import { AdminTitle } from '../../components/AdminTitle';

function AdminEscolas() {
    const username = localStorage.getItem('@doakid/username');
    const email = localStorage.getItem('@doakid/email');

    return (
      <Container>
        <AdminHeader></AdminHeader>
        <MainContainer>
            <AdminMenu></AdminMenu>
            <div>
              <AdminTitle>Escolas Cadastradas</AdminTitle>
              <div>
                <AdminSchoolCard></AdminSchoolCard>
              </div>
            </div>
        </MainContainer>
      </Container>
    );
}

export default AdminEscolas;