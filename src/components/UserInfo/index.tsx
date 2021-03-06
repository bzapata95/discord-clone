import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

const ServerName: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />

        <UserData>
          <strong>Bryan Zapata</strong>
          <span>#4809</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default ServerName;