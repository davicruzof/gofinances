import React, { ReactElement } from 'react';

import { Category, Container, Icon } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

function CategorySelectButton({ title, onPress }: Props): ReactElement {
  return (
    <Container
      onPress={onPress}
    >
        <Category>{title}</Category>
        <Icon name='chevron-down' />
    </Container>
  );
};

export {CategorySelectButton};
