import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickName: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickName, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickName}</strong>

        {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponible - 1</Role>
      <UserRow nickName="Bryan Zapata" />

      <Role>Ofline - 18</Role>
      <UserRow nickName="Diego Fernandes" isBot/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
      <UserRow nickName="Fulano tal"/>
    </Container>
  )
}

export default UserList;