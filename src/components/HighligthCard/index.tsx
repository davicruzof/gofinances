import React, { ReactElement } from 'react';

import { Amount, Container, Footer, Header, Icon, LastTransaction, Title } from './styles';

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total'
}

const icon = {
  'up': 'arrow-up-circle',
  'down': 'arrow-down-circle',
  'total': 'dollar-sign'
}

function HighlightCard({
  title,
  type,
  amount,
  lastTransaction
}: Props): ReactElement {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};

export {HighlightCard};
