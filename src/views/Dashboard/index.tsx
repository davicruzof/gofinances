import React, { ReactElement } from 'react';

import { 
  User, 
  Icon, 
  Title, 
  Header, 
  UserInfo, 
  Username, 
  Container, 
  UserAvatar, 
  UserWrapper, 
  LogoutButton,
  UserGreeting, 
  Transactions, 
  HighlightCards,
  TransactionsList 
} from './styles';


import { 
  TransactionCard, 
  TransactionCardProps 
} from '@components/TransactionCard';
import { HighlightCard } from '@components/HighligthCard';

const avatar = 'https://avatars.githubusercontent.com/u/47984117?v=4';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

function Dashboard(): ReactElement {

  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      amount:'R$: 12.000,00',
      date:'12/03/2021',
      title:'Desenvolvimento de Site',
      category:{
        name: 'Vendas',
        icon: 'dollar-sign'
      }
    },
    {
      id: '2',
      type: 'negative',
      amount:'R$: 38,00',
      date:'15/03/2021',
      title:'Hamburger Pizza',
      category:{
        name: 'Alimentação',
        icon: 'coffee'
      }
    },
    {
      id: '3',
      type: 'negative',
      amount:'R$: 1.200,00',
      date:'27/03/2021',
      title:'Aluguel do Apartamento',
      category:{
        name: 'Casa',
        icon: 'home'
      }
    }
  ]

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
          <LogoutButton onPress={() => console.log('OI')}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HighlightCards >
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

      <Transactions>
        <Title>Listagem de Transações</Title>
        
        <TransactionsList 
          data={data}
          keyExtractor={item => item.id }
          renderItem={({ item }) => <TransactionCard  data={item} />}
        />
      </Transactions>

    </Container>
  );
};

export {Dashboard};
