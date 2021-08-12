import React from 'react';
import Header from '../../components/Header'
import { ContainerCadastroItens, ContainerCadastroItem } from './style'
import InputCustom from '../../components/Input';
import { Menu, message, Button, Space, Input, Dropdown } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

function RegisterItensPage() {
  const { TextArea } = Input;
  const onChange = e => {
    console.log('Change:', e.target.value);
  };
  const [inputIdade, setInputIdade] = React.useState(true);
  const [inputTamanho, setInputTamanho] = React.useState(true);
  const [inputQuantidade, setInputQuantidade] = React.useState(true);
  const [inputNumeracao, setInputNumeracao] = React.useState(true);
  const success = () => {
    message.success('O item foi cadastrado!', 2);
  };

  function handleMenuClick(e) {
    
    if(e.key === '1' ){
      message.info(`Item Livro Selecionado!`);
      setInputIdade(!inputIdade && !(e.key === '1') )
      setInputTamanho(true)
      setInputNumeracao(true)
      setInputQuantidade(true)
    }else if(e.key === '2'){
      message.info(`Item Roupa Selecionado!`);
      setInputTamanho(!inputTamanho && !(e.key === '2')) 
      setInputNumeracao(true)
      setInputQuantidade(true)
      setInputIdade(true)
    }else if(e.key === '3'){
      message.info(`Item Sapato Selecionado!`);
      setInputNumeracao(!inputNumeracao && !(e.key === '3'))
      setInputQuantidade(true)
      setInputIdade(true)
      setInputTamanho(true)
    }else if(e.key === '4'){
      message.info(`Item Brinquedo Selecionado!`);
      setInputIdade(!inputIdade && !(e.key === '4'))
      setInputTamanho(true)
      setInputNumeracao(true)
      setInputQuantidade(true)
    }else if(e.key === '5'){
      message.info(`Item Fralda Selecionado!`);
      setInputTamanho(!inputTamanho && !(e.key === '5'))
      setInputQuantidade(!inputQuantidade && !(e.key === '5'))
      setInputNumeracao(true)
      setInputIdade(true)
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Livro
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Roupa
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        Sapato
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        Brinquedo
      </Menu.Item>
      <Menu.Item key="5" icon={<UserOutlined />}>
        Fralda
      </Menu.Item>
    </Menu>
  );

  return (
    <ContainerCadastroItens>
        <Header></Header>
        <div>
          <h1>Cadastre um item para doação!</h1>
          <ContainerCadastroItem>
            <InputCustom
              type="text"
              name="nome"
              placeholder="Nome do Item"
            />
            <TextArea className="text" rows={5} placeholder="Descrição do Produto" showCount maxLength={150} onChange={onChange} />
            <Space>
              <Dropdown overlay={menu}>
                <button className='Button-menu'>
                  Tipo de Item <DownOutlined />
                </button>
              </Dropdown>
            </Space>
            <div className="input-extras">
              {inputIdade ? <div/> :<InputCustom style={{width: "50%"}} placeholder="Idade Recomendada"/>}
              {inputNumeracao ? <div/> : <InputCustom style={{width: "50%"}} placeholder="Numeração"/>}
            </div>
            <div className="input-extras">
              {inputTamanho ? <div/> : <InputCustom style={{width: "50%"}} placeholder="Tamanho"/>}
              {inputQuantidade ? <div/> : <InputCustom style={{width: "50%"}} placeholder="Quantidade"/>}
            </div>
            <Space>
              <Button onClick={success}>Cadastrar</Button>
            </Space>
          </ContainerCadastroItem>
        </div>
    </ContainerCadastroItens>
  );
}

export default RegisterItensPage;