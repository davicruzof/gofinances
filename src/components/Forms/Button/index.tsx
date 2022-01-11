import React, { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}


function Button({title, onPress, ...rest}: Props): ReactElement {
  return (
    <GestureHandlerRootView>
      <Container
        {...rest}
        onPress={onPress}
      >
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
};

export {Button};
