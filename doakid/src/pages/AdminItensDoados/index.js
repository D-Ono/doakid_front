import React, { useState, useEffect } from 'react';
import { Container, ItemContainer, MainContainer } from './style';
import AdminHeader from '../../components/AdminHeader';
import AdminMenu from '../../components/AdminMenu';
import { AdminTitle } from '../../components/AdminTitle';
import AdminItemCardClose from '../../components/AdminItemCardClose';
import api from "../../services/api";

function AdminItensDoados() {
  const [itens, setItens] = useState([]);
  const [itensSemDoador, setItensSemDoador] = useState([]);

  useEffect(() => {
    api.get("http://localhost:5000/item/closeList").then((response) => {
      setItens(response.data);
      console.log(itens);
    });
    api.get("http://localhost:5000/item/closeListWithoutUser").then((response) => {
      setItensSemDoador(response.data.filter((item) => item.cod_Usuario==0));
      console.log(itens);
    });
  }, []);

    return (
      <Container>
        <AdminHeader></AdminHeader>
        <MainContainer>
            <AdminMenu></AdminMenu>
            <div className='MainContent'>
              <AdminTitle>Itens Doados</AdminTitle>
              <ItemContainer>
                {itens.map((item) => (
                  <AdminItemCardClose
                    key={item.cod_item}
                    nome={item.nome_item}
                    url={item.url}
                    descricao={item.descricao_item}
                    doador={item.nome}
                    data={item.data_registro}
                    data_doacao={item.data_doacao}
                  />
                ))}
                {itensSemDoador.map((item) => (
                  <AdminItemCardClose
                    key={item.cod_item}
                    nome={item.nome_item}
                    url={item.url}
                    descricao={item.descricao_item}
                    doador="--"
                    data={item.data_registro}
                    data_doacao={item.data_doacao}
                  />
                ))}
              </ItemContainer>
            </div>
        </MainContainer>
      </Container>
    );
}

export default AdminItensDoados;