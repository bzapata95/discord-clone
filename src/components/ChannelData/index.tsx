import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  },[messagesRef])
  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Bryan Zapata"
            date="21/06/2020"
            content="Hoy es mi aniversario!"
          />
        ))}

        <ChannelMessage
          author="Diego Fernandes"
          date="21/06/2020"
          content={
            <>
              <Mention>@Bryan Zapata</Mention>, Hola como estás felicitaciones
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar en #chat-libre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;