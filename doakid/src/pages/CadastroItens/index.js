import React, {useState} from 'react';
import Header from '../../components/Header'
import { ContainerCadastroItens, ContainerCadastroItem } from './style'
import InputCustom from '../../components/Input';
import { Menu, message, Button, Space, Input, Dropdown } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import api from '../../services/api';

function RegisterItensPage() {
  const today = new Date(); 
  const data = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
  const cod_Usuario = localStorage.getItem('@doakid/userCode');
  const [nome, setNome] = useState('');
  const [url, setUrl] = useState('');
  const [descricao, setDescricao] = useState('');
  const [info, setInfo] = useState('');
  const [infoExtra, setInfoExtra] = useState();
  const { TextArea } = Input;
  const [inputIdade, setInputIdade] = useState(true);
  const [inputTamanho, setInputTamanho] = useState(true);
  const [inputQuantidade, setInputQuantidade] = useState(true);
  const [inputNumeracao, setInputNumeracao] = useState(true);
  const [itemSelected, setItemSelected] = useState(0);
  
  function myRandom(min, max, multiple) {
    return Math.round(Math.random() * (max - min) / multiple) * multiple + min;
  }

  async function success(){
    let codigoGeral;
    const codigoItem = Math.floor(Math.random() * 50000);
    switch(itemSelected){
      case 1:   //Livro  - Codigo Geral é multiplos 
      codigoGeral = myRandom(1, 50000, 5);
        try {
          const response = await api.post('http://localhost:5000/livro/create',
          {
            codigoGeral, 
            nome, 
            url, 
            descricao,
            data, 
            codigoItem, 
            info, 
            cod_Usuario
          });
          if(response.status === 200) {
            setNome('');
            setUrl("");
            setDescricao("");
            setInfo('');
            setInfoExtra('');
          }
        } catch (error) {
          console.log(error)
          console.log(error.response);
        }
        message.success('O item foi cadastrado!', 2);
        break;
      case 2:   // ROUPA 
      codigoGeral = myRandom(2, 50000, 5);
        try {
          const response = await api.post('http://localhost:5000/roupa/create',
          {
            codigoGeral, 
            nome, 
            url, 
            descricao,
            data, 
            codigoItem, 
            info,
            cod_Usuario
          });
          console.log(response)
          if(response.status === 200) {
            setNome('');
            setUrl("");
            setDescricao("");
            setInfo('');
            setInfoExtra('');
          }
        } catch (error) {
          console.log(error)
          console.log(error.response);
        }
        message.success('O item foi cadastrado!', 2);
        break;
      case 3:   //sapato
        codigoGeral = myRandom(3, 50000, 5);
        try {
          const response = await api.post('http://localhost:5000/sapato/create',
          {
            codigoGeral, 
            nome, 
            url, 
            descricao,
            data, 
            codigoItem, 
            infoExtra,
            cod_Usuario
          });
          console.log(response)
          if(response.status === 200) {
            setNome('');
            setUrl("");
            setDescricao("");
            setInfo('');
            setInfoExtra('');
          }
        } catch (error) {
          console.log(error)
          console.log(error.response);
        }
        message.success('O item foi cadastrado!', 2);
        break;
      case 4: // Brinquedo 
        codigoGeral = myRandom(4, 50000, 5);
        try {
          const response = await api.post('http://localhost:5000/brinquedo/create',
          {
            codigoGeral, 
            nome, 
            url, 
            descricao,
            data, 
            codigoItem, 
            info,
            cod_Usuario
          });
          if(response.status === 200) {
            setNome('');
            setUrl("");
            setDescricao("");
            setInfo('');
            setInfoExtra('');
          }
        } catch (error) {
          console.log(error)
          console.log(error.response);
        }
        message.success('O item foi cadastrado!', 2);
        break;
      case 5: // Fralda
       codigoGeral = myRandom(5, 50000, 5);
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
            info,
            cod_Usuario
          });
          console.log(response)
          if(response.status === 200) {
            setNome('');
            setUrl("");
            setDescricao("");
            setInfo('');
            setInfoExtra('');
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
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <InputCustom
              type="text"
              name="url"
              placeholder="URL da Imagem"
              value = {url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <TextArea 
              className="text" 
              rows={5} 
              placeholder="Descrição do Produto" 
              showCount 
              maxLength={150} 
              value = {descricao}
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
              {inputIdade ? <div/> :<InputCustom style={{width: "50%"}} placeholder="Idade Recomendada (2-5 Anos)" value={info} onChange={(e) => setInfo(e.target.value)}/>}
              {inputNumeracao ? <div/> : <InputCustom style={{width: "50%"}} placeholder="Numeração" value={infoExtra} onChange={(e) => setInfoExtra(e.target.value)}/>}
            </div>
            <div className="input-extras">
              {inputTamanho ? <div/> : <InputCustom style={{width: "50%"}} placeholder="Tamanho" value={info}  onChange={(e) => setInfo(e.target.value)}/>}
              {inputQuantidade ? <div/> : <InputCustom style={{width: "50%"}} placeholder="Quantidade" value={infoExtra} onChange={(e) => setInfoExtra(e.target.value)}/>}
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