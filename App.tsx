import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from  '@styles/theme';
import { AppRoutes } from '@routes/app.routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
      <StatusBar 
        barStyle='dark-content' 
        backgroundColor="rgba(0,0,0,0)" 
        translucent 
      />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
