import React, { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string
}


function Button({title, ...rest}: Props): ReactElement {
  return (
    <GestureHandlerRootView>
      <Container
        {...rest}
        onPress={() => console.log('Cliquei no btn laranja')}
      >
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
};

export {Button};
