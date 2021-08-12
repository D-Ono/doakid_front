import React from 'react';
import { ProfileContainer } from './style';
import Header from '../../components/Header';
import userPhoto from '../../assets/user.png'
import { Button } from 'antd';

function Profile() {

  return (
      <ProfileContainer>
        <Header></Header>
        <div>
          <div className="perfil">  
            <img src={userPhoto} alt="Foto de perfil"></img>            
            <div className="detalhes-perfil">
              <h1>Olá, Joaquim!  </h1> 
              <h2>Telefone: (18)99620-3465</h2>
              <h2>E-Mail: joaquimBarbosa@gmail.com</h2>
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