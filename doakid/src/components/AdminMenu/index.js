import React from 'react';
import { SideBar } from './style';
import { Menu } from "antd";
import { Link } from 'react-router-dom';

function AdminMenu() {
    const { SubMenu } = Menu;
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
    return (
        <SideBar>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 256 }}
            >
                <SubMenu key="sub1" title="Itens">
                    <Menu.Item key="1">
                        Itens Disponíveis
                    </Menu.Item>
                    <Menu.Item key="2">
                        Itens Doados
                    </Menu.Item>
                    <Menu.Item key="3">
                        Informações sobre doações
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub1" title="Usuarios">
                    <Menu.Item key="4">
                        Escolas Cadastradas
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/Cadastro">Usuarios Cadastrados</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </SideBar>
    );
}

export default AdminMenu;