import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MainPage from './pages/TelaInicial';
import CadastroEscola from './pages/CadastroEscola';
import ListaEscola from './pages/ListaEscolas';
import CadastroItens from './pages/CadastroItens';
import Profile from './pages/PaginaUsuario';
import AlterarDados from './pages/AlterarDados';

function Routes() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route path='/Cadastro' component={Cadastro} />
        <Route path='/Inicio' component={MainPage} />
        <Route path='/CadastroEscola' component={CadastroEscola} />
        <Route path='/ListaEscola' component={ListaEscola} />
        <Route path='/CadastroItens' component={CadastroItens} />
        <Route path='/Profile' component={Profile} />
        <Route path='/AlterarDados' component={AlterarDados} />
    </BrowserRouter>
  );
}

export default Routes;