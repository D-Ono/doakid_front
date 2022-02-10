import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import { MainContainer } from "./style";
import { Menu } from "antd";
import api from "../../services/api";
import { Link } from 'react-router-dom';

function MainPageShoes() {
  const { SubMenu } = Menu;
  const [itens, setItens] = useState([]);
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    api.get("http://localhost:5000/item/list").then((response) => {
      setItens(response.data.filter((item) => item.cod_item % 5 === 3));
    });
  }, []);

  return (
    <MainContainer>
      <Header></Header>
      <div className="container">
        <div className="SideBar">
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
          >
            <SubMenu key="sub1" title="Filtrar por...">
              <Menu.Item key="6">
                <Link to="/Inicio">Todos os Itens</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/InicioBrinquedos">Brinquedos</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/InicioFraldas">Fraldas</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/InicioLivros">Livros</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/InicioRoupas">Roupas</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/InicioSapatos">Sapatos</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="ItensContainer">
          {
          itens.map((item) => (
            <ItemCard
              key={item.cod_item}
              cod_Usuario={item.cod_Usuario}
              nome={item.nome_item}
              url={item.url}
              descricao={item.descricao_item}
            />
          ))}
        </div>
      </div>
    </MainContainer>
  );
}

export default MainPageShoes;
