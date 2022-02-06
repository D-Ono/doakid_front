import React from 'react';
import { Container, ItemContainer, MainContainer } from './style';
import AdminHeader from '../../components/AdminHeader';
import AdminMenu from '../../components/AdminMenu';
import { AdminTitle } from '../../components/AdminTitle';
import AdminItemCard from '../../components/AdminItemCard';

function AdminItensDisponiveis() {
    const username = localStorage.getItem('@doakid/username');
    const email = localStorage.getItem('@doakid/email');

    return (
      <Container>
        <AdminHeader></AdminHeader>
        <MainContainer>
            <AdminMenu></AdminMenu>
            <div className='MainContent'>
              <AdminTitle>Itens Disponiveis</AdminTitle>
              <ItemContainer>
                <AdminItemCard></AdminItemCard>
              </ItemContainer>
            </div>
        </MainContainer>
      </Container>
    );
}

export default AdminItensDisponiveis;