import React from 'react';
import { ProfileContainer } from './style';
import Header from '../../components/Header';
import userPhoto from '../../assets/user.png'
import { Button } from 'antd';

function Profile() {
  const username = localStorage.getItem('@doakid/username');
  const email = localStorage.getItem('@doakid/email');

  return (
      <ProfileContainer>
        <Header></Header>
        <div>
          <div className="perfil">  
            <img src={userPhoto} alt="Foto de perfil"></img>            
            <div className="detalhes-perfil">
              <h1>Olá, {username}  </h1> 
              <h2>E-Mail: {email}</h2>
             </div>
          </div>
          <Button>Alterar Dados</Button>
          <h1>Seus itens</h1>
          <h3>Você ainda não cadastrou nenhum item!</h3>
        </div>
      </ProfileContainer>
  );
}

export default Profile;