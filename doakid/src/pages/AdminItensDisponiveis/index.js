import React, { useState, useEffect } from 'react';
import { Container, ItemContainer, MainContainer } from './style';
import AdminHeader from '../../components/AdminHeader';
import AdminMenu from '../../components/AdminMenu';
import { AdminTitle } from '../../components/AdminTitle';
import AdminItemCard from '../../components/AdminItemCard';
import api from "../../services/api";

function AdminItensDisponiveis() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
      api.get("http://localhost:5000/item/openListAdmin").then((response) => {
        setItens(response.data);
      });
    }, );

    return (
      <Container>
        <AdminHeader></AdminHeader>
        <MainContainer>
            <AdminMenu></AdminMenu>
            <div className='MainContent'>
              <AdminTitle>Itens Disponiveis</AdminTitle>
              <ItemContainer>
                {itens.map((item) => (
                  <AdminItemCard
                    key={item.cod_item}
                    cod_item={item.cod_item}
                    nome={item.nome_item}
                    url={item.url}
                    doador={item.nome}
                    data={item.data_registro}
                  />
                ))}
              </ItemContainer>
            </div>
        </MainContainer>
      </Container>
    );
}

export default AdminItensDisponiveis;