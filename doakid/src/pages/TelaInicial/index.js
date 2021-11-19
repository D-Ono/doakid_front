import React, {useState, useEffect} from 'react';
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import { MainContainer } from './style'
import { Menu } from 'antd';
import api from '../../services/api';

function MainPage() {
  const { SubMenu } = Menu;
  const [itens, setItens] = useState([]);
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
  };

  useEffect(() => {
      api.get('http://localhost:5000/item/list').then(response => {
        setItens(response.data);
      })
  }, );

  return (
    <MainContainer>
        <Header></Header>
        <div className="container">
          <div className="SideBar">
            <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
              <SubMenu key="sub1"  title="Livro">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Brinquedos">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title="Fraldas">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title="Roupas">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
              <SubMenu key="sub5" title="Sapato">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className="ItensContainer">
            {itens.map(item => (
              <ItemCard 
                key={item.cod_item} 
                nome={item.nome_item} 
                url={item.url}
                descricao={item.descricao_item}
              />))}
          </div>
        </div>
    </MainContainer>
  );
}

export default MainPage;