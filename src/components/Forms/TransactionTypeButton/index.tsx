import React, { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
  title: string,
  type: 'up' | 'down';
  isActive: boolean;
}

function TransactionTypeButton({title, type, isActive, ...rest}:Props ): ReactElement {
  
  return (
    <Container
      isActive={isActive}
      type={type}
      {...rest}
    >
      <Icon 
        name={icons[type]} 
        type={type}
      />
      <Title>
        {title}
      </Title>

    </Container>
  );
};

export {TransactionTypeButton};
