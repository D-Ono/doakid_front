import React from 'react';
import { Container, ItemContainer, MainContainer } from './style';
import AdminHeader from '../../components/AdminHeader';
import AdminMenu from '../../components/AdminMenu';
import { AdminTitle } from '../../components/AdminTitle';
import AdminItemCard from '../../components/AdminItemCard';

function AdminItensDoados() {
    const username = localStorage.getItem('@doakid/username');
    const email = localStorage.getItem('@doakid/email');

    return (
      <Container>
        <AdminHeader></AdminHeader>
        <MainContainer>
            <AdminMenu></AdminMenu>
            <div>
              <AdminTitle>Itens Doados</AdminTitle>
              <ItemContainer>
                <AdminItemCard></AdminItemCard>
              </ItemContainer>
            </div>
        </MainContainer>
      </Container>
    );
}

export default AdminItensDoados;