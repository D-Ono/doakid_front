import React, {useState} from 'react';
import Header from '../../components/Header'
import { ContainerCadastroItens, ContainerCadastroItem } from './style'
import InputCustom from '../../components/Input';
import { Menu, message, Button, Space, Input, Dropdown } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import api from '../../services/api';

function RegisterItensPage() {
  const data = '2021-11-16'; 
  const [nome, setNome] = useState('');
  const [url, setUrl] = useState('');
  const [descricao, setDescricao] = useState('');
  const [info, setInfo] = useState('');
  const [infoExtra, setInfoExtra] = useState(0);
  const { TextArea } = Input;
  const [inputIdade, setInputIdade] = useState(true);
  const [inputTamanho, setInputTamanho] = useState(true);
  const [inputQuantidade, setInputQuantidade] = useState(true);
  const [inputNumeracao, setInputNumeracao] = useState(true);
  const [itemSelected, setItemSelected] = useState(0);
  
  async function success(){
    const codigoGeral = 27;
    const codigoItem = 1020;
    switch(itemSelected){
      case 1:   //Livro 
        try {
          const response = await api.post('http://localhost:5000/livro/create',
          {
            codigoGeral, 
            nome, 
            url, 
            descricao,
            data, 
            codigoItem, 
            info
          });
          if(response.status === 200) {
            document.getElementsByTagName('nome').value=''; // Limpa o campo

          }
        } catch (error) {
          console.log(error)
          console.log(error.response);
        }
        message.success('O item foi cadastrado!', 2);
        break;
      case 2:   // ROUPA 
        try {
          const response = await api.post('http://localhost:5000/roupa/create',
          {
            codigoGeral, 
            nome, 
            url, 
            descricao,
            data, 
            codigoItem, 
            info
          });
          console.log(response)
          if(response.status === 200) {
            document.getElementsByTagName('nome').value=''; // Limpa o campo

          }
        } catch (error) {
          console.log(error)
          console.log(error.response);
        }
        message.success('O item foi cadastrado!', 2);
        break;
      case 3:   //sapato
        try {
          const response = await api.post('http://localhost:5000/sapato/create',
          {
            codigoGeral, 
            nome, 
            url, 
            descricao,
            data, 
            codigoItem, 
            infoExtra
          });
          console.log(response)
          if(response.status === 200) {
            document.getElementsByTagName('nome').value=''; // Limpa o campo

          }
        } catch (error) {
          console.log(error)
          console.log(error.response);
        }
        message.success('O item foi cadastrado!', 2);
        break;
      case 4: // Brinquedo 
        try {
          const response = await api.post('http://localhost:5000/brinquedo/create',
          {
            codigoGeral, 
            nome, 
            url, 
            descricao,
            data, 
            codigoItem, 
            info
          });
          console.log(response)
          if(response.status === 200) {
            document.getElementsByTagName('nome').value=''; // Limpa o campo

          }
        } catch (error) {
          console.log(error)
          console.log(error.response);
        }
        message.success('O item foi cadastrado!', 2);
        break;
      case 5: // Fralda
        try {
          const response = await api.post('http://localhost:5000/fralda/create',
          {
            codigoGeral, 
            nome, 
            url, 
            descricao,
            data, 
            codigoItem, 
            infoExtra, 
            info
          });
          console.log(response)
          if(response.status === 200) {
            document.getElementsByTagName('nome').value=''; // Limpa o campo

          }
        } catch (error) {
          console.log(error)
          console.log(error.response);
        }
        message.success('O item foi cadastrado!', 2);
        break;
      default:
        message.warning('Selecione um tipo de item a ser doado!', 2);
    }
  };

  function handleMenuClick(e) {
    
    if(e.key === '1' ){
      message.info(`Item Livro Selecionado!`);
      setInputIdade(!inputIdade && !(e.key === '1') )
      setInputTamanho(true)
      setInputNumeracao(true)
      setInputQuantidade(true)
      setItemSelected(1);
    }else if(e.key === '2'){
      message.info(`Item Roupa Selecionado!`);
      setInputTamanho(!inputTamanho && !(e.key === '2')) 
      setInputNumeracao(true)
      setInputQuantidade(true)
      setInputIdade(true)
      setItemSelected(2);
    }else if(e.key === '3'){
      message.info(`Item Sapato Selecionado!`);
      setInputNumeracao(!inputNumeracao && !(e.key === '3'))
      setInputQuantidade(true)
      setInputIdade(true)
      setInputTamanho(true)
      setItemSelected(3);
    }else if(e.key === '4'){
      message.info(`Item Brinquedo Selecionado!`);
      setInputIdade(!inputIdade && !(e.key === '4'))
      setInputTamanho(true)
      setInputNumeracao(true)
      setInputQuantidade(true)
      setItemSelected(4);
    }else if(e.key === '5'){
      message.info(`Item Fralda Selecionado!`);
      setInputTamanho(!inputTamanho && !(e.key === '5'))
      setInputQuantidade(!inputQuantidade && !(e.key === '5'))
      setInputNumeracao(true)
      setInputIdade(true)
      setItemSelected(5);
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
              onChange={(e) => setNome(e.target.value)}
            />
            <InputCustom
              type="text"
              name="url"
              placeholder="URL da Imagem"
              onChange={(e) => setUrl(e.target.value)}
            />
            <TextArea 
              className="text" 
              rows={5} 
              placeholder="Descrição do Produto" 
              showCount 
              maxLength={150} 
              onChange={(e) => setDescricao(e.target.value)}
              />
            <Space>
              <Dropdown overlay={menu}>
                <button className='Button-menu'>
                  Tipo de Item <DownOutlined />
                </button>
              </Dropdown>
            </Space>
            <div className="input-extras">
              {inputIdade ? <div/> :<InputCustom style={{width: "50%"}} placeholder="Idade Recomendada" onChange={(e) => setInfo(e.target.value)}/>}
              {inputNumeracao ? <div/> : <InputCustom style={{width: "50%"}} placeholder="Numeração" onChange={(e) => setInfoExtra(e.target.value)}/>}
            </div>
            <div className="input-extras">
              {inputTamanho ? <div/> : <InputCustom style={{width: "50%"}} placeholder="Tamanho"  onChange={(e) => setInfo(e.target.value)}/>}
              {inputQuantidade ? <div/> : <InputCustom style={{width: "50%"}} placeholder="Quantidade" onChange={(e) => setInfoExtra(e.target.value)}/>}
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