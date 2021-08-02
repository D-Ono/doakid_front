import React from 'react';
import {ContainerHeader} from './style'
import {Link} from 'react-router-dom';
import {Dropdown, Menu} from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Header() {

  const menu = (
    <Menu >
      <Menu.Item key="1" icon={<UserOutlined />}>
        <h3><Link exact to="/Profile" >Profile</Link></h3>
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        <h3><Link exact to="/" >Sair</Link></h3>
      </Menu.Item>
    </Menu>
  );

  return(
    <ContainerHeader>
      <div className="Test">
        <h1>Doakid</h1>
        <div className="menu">
          <Menu style ={{background: "#6A0DAD"}} mode="horizontal">
            <Menu.Item key="1"><h3><Link to='/Inicio'>Página Inicial</Link></h3></Menu.Item>
            <Menu.Item key="2"><h3><Link to='/CadastroItens'>Cadastrar Itens</Link></h3></Menu.Item>
            <Menu.Item key="3"><h3><Link to='/ListaEscola' >Escolas Registradas</Link></h3></Menu.Item>
          </Menu>
        </div>
        <div>
          <Dropdown.Button className="profile" overlay={menu} placement="bottomCenter" icon={<UserOutlined/>}>
          </Dropdown.Button>
        </div>
      </div>
    </ContainerHeader>
  );
}

export default Header;