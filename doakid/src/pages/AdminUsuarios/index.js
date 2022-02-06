import React from 'react';
import { Container, MainContainer, UserContainer } from './style';
import AdminHeader from '../../components/AdminHeader';
import AdminMenu from '../../components/AdminMenu';
import { AdminTitle } from '../../components/AdminTitle';
import AdminUserCard from '../../components/AdminUserCard';

function AdminUsuarios() {
    const username = localStorage.getItem('@doakid/username');
    const email = localStorage.getItem('@doakid/email');

    return (
      <Container>
        <AdminHeader></AdminHeader>
        <MainContainer>
            <AdminMenu></AdminMenu>
            <div>
              <AdminTitle>Usuarios Cadastrados</AdminTitle>
              <UserContainer>
                <AdminUserCard></AdminUserCard>
                <AdminUserCard></AdminUserCard>
                <AdminUserCard></AdminUserCard>
              </UserContainer>
            </div>
        </MainContainer>
      </Container>
    );
}

export default AdminUsuarios;