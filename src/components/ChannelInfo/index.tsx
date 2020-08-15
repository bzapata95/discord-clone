import React from 'react';

import { Container,HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Chat-libre</Title>

      <Separator />

      <Description>Canal abierto para conversaciones</Description>
    </Container>
  )
}

export default ChannelInfo;