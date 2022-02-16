import React, {useState, useEffect} from 'react';
import { Container, MainContainer, UserContainer } from './style';
import AdminHeader from '../../components/AdminHeader';
import AdminMenu from '../../components/AdminMenu';
import { AdminTitle } from '../../components/AdminTitle';
import AdminUserCard from '../../components/AdminUserCard';
import api from '../../services/api';

function AdminUsuarios() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    api.get('http://localhost:5000/familia/list').then(response => {
      setUsuario(response.data);
    })
  }, );

  return (
    <Container>
      <AdminHeader></AdminHeader>
      <MainContainer>
          <AdminMenu></AdminMenu>
          <div className='MainContent'>
            <AdminTitle>Usuarios Cadastrados</AdminTitle>
            <UserContainer>
              {usuario.map(user => (
                <AdminUserCard 
                  key={user.cod_familia} 
                  cod_familia={user.cod_familia} 
                  name={user.nome} 
                  sobrenome={user.sobrenome}
                  telefone={user.numero}
                  email={user.email_familia}
                />))}
            </UserContainer>
          </div>
      </MainContainer>
    </Container>
  );
}

export default AdminUsuarios;