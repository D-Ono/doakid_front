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
import AlterarDadosEscola from './pages/AlterarDadosEscola';
import AdminEscolas from './pages/AdminEscolas';
import AdminInfo from './pages/AdminInfo';
import AdminItensDisponiveis from './pages/AdminItensDisponiveis';
import AdminItensDoados from './pages/AdminItensDoados';
import AdminUsuarios from './pages/AdminUsuarios';

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
        <Route path='/AlterarDadosEscola' component={AlterarDadosEscola} />
        <Route path='/AdminItensDisponiveis' component={AdminItensDisponiveis} />
        <Route path='/AdminEscolas' component={AdminEscolas} />
        <Route path='/AdminInfo' component={AdminInfo} />
        <Route path='/AdminItensDoados' component={AdminItensDoados} />
        <Route path='/AdminUsuarios' component={AdminUsuarios} />
    </BrowserRouter>
  );
}

export default Routes;