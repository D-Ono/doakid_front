import React, {useState, useEffect} from 'react';
import Header from '../../components/Header'
import ItemCard from '../../components/ItemCard'
import { MainContainer } from './style'
import { Menu } from 'antd';
import api from '../../services/api';


function MainPage() {  
  const { SubMenu } = Menu;
  const [itens, setItens] = useState([]);
  const [copyItens, setCopyItens] = useState([]);
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  let ARROZ= 1;
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
  };

  useEffect(() => {
      api.get('http://localhost:5001/item/list').then(response => {
        setItens(response.data);
      })
  }, [ARROZ] );

  function onChange(e) {

    if(e.key == 1){   // BRINQUEDOS --- 04
      ARROZ = 2; 
      setItens(itens.filter(item => (item.cod_item%5) === 4 ))
    }
    if(e.key == 2){   // FRALDAS --- 05
      ARROZ = 4; 
      setItens(itens.filter(item => (item.cod_item%5) === 0 ))
    }
    if(e.key == 3){   // LIVROS --- 01
      setItens(itens.filter(item => (item.cod_item%5) === 1 ))
    }
    if(e.key == 4){   // ROUPAS  --- 02
      setItens(itens.filter(item => (item.cod_item%5) === 2 ))
    }
    if(e.key == 5){   // SAPATOS  --- 03
      setItens(itens.filter(item => (item.cod_item%5) === 3 ))
    }
  }

  return (
    <MainContainer>
        <Header></Header>
        <div className="container">
          <div className="SideBar">
            <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
              <SubMenu key="sub1"  title="Filtrar por...">
                <Menu.Item key="1" onClick={onChange}>Brinquedos</Menu.Item>
                <Menu.Item key="2" onClick={onChange}>Fraldas</Menu.Item>
                <Menu.Item key="3" onClick={onChange}>Livros</Menu.Item>
                <Menu.Item key="4" onClick={onChange}>Roupas</Menu.Item>
                <Menu.Item key="5" onClick={onChange}>Sapatos</Menu.Item>
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