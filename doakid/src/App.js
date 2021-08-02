import React from 'react';

//import Routes from './routes';
//import Login from './pages/Login';
//import { ConfigProvider } from 'antd';
//import ptBR from 'antd/lib/locale/pt_BR';
import 'antd/dist/antd.css';
import GlobalStyle from './style/GlobalStyle';
import Routes from './routes';

function App() {
  return (
    <div>
      <Routes></Routes>
      <GlobalStyle/>  
    </div>
  );
}

export default App;
