import React, { ReactElement } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Category, Container, Icon } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

function CategorySelectButton({ title, onPress }: Props): ReactElement {
  return (
    <GestureHandlerRootView>
      <Container
        onPress={onPress}
      >
          <Category>{title}</Category>
          <Icon name='chevron-down' />
      </Container>
    </GestureHandlerRootView>
  );
};

export {CategorySelectButton};
