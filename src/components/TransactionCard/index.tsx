import React from 'react';

import { Amount, Category, CategoryName, Container, Date, Footer, Icon, Title } from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  date: string;
  title: string;
  amount: string;
  category: Category;
}

interface Props {
  data: TransactionCardProps;
}

function TransactionCard({data: {
  type,
  title,
  date,
  amount,
  category
}}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount type={type}>
        {type === 'negative' && '- '}
        {amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};

export {TransactionCard};
