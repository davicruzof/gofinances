import React, { ReactElement } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Button, Container, Icon, Title } from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends RectButtonProps {
  title: string,
  type: 'up' | 'down';
  isActive: boolean;
}

function TransactionTypeButton({title, type, isActive, ...rest}:Props ): ReactElement {
  
  return (
    <Container 
      type={type} isActive={isActive}
    >
      <Button
        type={type} isActive={isActive}
        {...rest}
      >
        <Icon 
          name={icons[type]} 
          type={type}
        />
        <Title>
          {title}
        </Title>

      </Button>
    </Container>
  );
};

export {TransactionTypeButton};
