import React from 'react';
import {ContainerHeader} from './style'
import {Link} from 'react-router-dom';
import {Dropdown, Menu} from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Header() {
  const userCode = localStorage.getItem('@doakid/userCode');

  const menu = (
    <Menu >
      <Menu.Item key="1" icon={<UserOutlined />}>
        {userCode%2 === 0 ? 
          <h3><Link exact to="/FamilyProfile" >Perfil</Link></h3>
          :
          <h3><Link exact to="/SchoolProfile" >Perfil</Link></h3>
        }
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        <h3><Link exact to="/" >Sair</Link></h3>
      </Menu.Item>
    </Menu>
  );

  return(
    <ContainerHeader>
      <div className="Test">
        <h1><Link to='/Inicio'>Doakid</Link></h1>
        <div className="menu">
          <Menu style ={{background: "#6A0DAD"}} mode="horizontal">
            <Menu.Item key="1"><h3><Link to='/Inicio'>Página inicial</Link></h3></Menu.Item>
            <Menu.Item key="2"><h3><Link to='/CadastroItens'>Cadastrar itens</Link></h3></Menu.Item>
            <Menu.Item key="3"><h3><Link to='/ListaEscola' >Escolas registradas</Link></h3></Menu.Item>
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