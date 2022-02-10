import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MainPage from './pages/TelaInicial';
import MainPageToys from './pages/TelaInicialBrinquedos';
import MainPageFraldas from './pages/TelaInicialFraldas';
import MainPageBooks from './pages/TelaInicialLivros';
import MainPageClothes from './pages/TelaInicialRoupas';
import MainPageShoes from './pages/TelaInicialSapatos';
import CadastroEscola from './pages/CadastroEscola';
import ListaEscola from './pages/ListaEscolas';
import CadastroItens from './pages/CadastroItens';
import FamilyProfile from './pages/PaginaUsuario';
import SchoolProfile from './pages/PaginaEscola';
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
        <Route path='/InicioBrinquedos' component={MainPageToys} />
        <Route path='/InicioFraldas' component={MainPageFraldas} />
        <Route path='/InicioLivros' component={MainPageBooks} />
        <Route path='/InicioRoupas' component={MainPageClothes} />
        <Route path='/InicioSapatos' component={MainPageShoes} />
        <Route path='/CadastroEscola' component={CadastroEscola} />
        <Route path='/ListaEscola' component={ListaEscola} />
        <Route path='/CadastroItens' component={CadastroItens} />
        <Route path='/FamilyProfile' component={FamilyProfile} />
        <Route path='/SchoolProfile' component={SchoolProfile} />
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