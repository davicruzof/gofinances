import React, { ReactElement } from 'react';

import { Container, Header, HighlightCards,UserWrapper, UserInfo, UserAvatar, Username, User, UserGreeting as UserGreeting, Icon } from './styles';

import { HighlightCard } from '@components/HighligthCard';

const avatar = 'https://avatars.githubusercontent.com/u/47984117?v=4';

function Dashboard(): ReactElement {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatar source={{ uri: avatar}} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <Username>Davi</Username>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard 
          title='Entradas' 
          type="up"
          amount='R$ 17.309,00' 
          lastTransaction='última entrada dia 13 de abril' 
        />
        <HighlightCard 
          title='Saidas'
          type="down" 
          amount='R$ 17.309,00' 
          lastTransaction='última entrada dia 13 de abril' 
        />
        <HighlightCard 
          title='Total' 
          type="total"
          amount='R$ 17.309,00' 
          lastTransaction='última entrada dia 13 de abril' 
        />
      </HighlightCards>
    </Container>
  );
};

export {Dashboard};
