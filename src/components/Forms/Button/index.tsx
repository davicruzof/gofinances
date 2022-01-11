import React, { ReactElement } from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string
}


function Button({title, ...rest}: Props): ReactElement {
  return (
    <GestureHandlerRootView>
      <Container
        {...rest}
      >
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
};

export {Button};
