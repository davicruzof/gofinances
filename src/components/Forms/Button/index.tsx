import React, { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string
}


function Button({title, ...rest}: Props): ReactElement {
  return (
    <Container
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
};

export {Button};
