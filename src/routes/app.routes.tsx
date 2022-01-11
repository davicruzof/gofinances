import React from "react";
import { Platform } from "react-native";
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Register } from "@views/Register";
import { Dashboard } from "@views/Dashboard";
const { Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){

    const theme = useTheme();
    
    return(
        <Navigator 
            initialRouteName="Listagem"
            screenOptions={{
                // desabilitar header
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                // deixar o ícone ao lado do label
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 70,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0 
                }
            }}    
        >
            <Screen 
                name="Listagem" 
                component={Dashboard} 
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <MaterialIcons 
                            name="format-list-bulleted"
                            size={size}
                            color={color} 
                        />
                    )
                }}
            />
            <Screen 
                name="Cadastrar" 
                component={Register} 
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <MaterialIcons 
                            name="attach-money"
                            size={size}
                            color={color} 
                        />
                    )
                }}
            />
            <Screen 
                name="Resumo" 
                component={Dashboard} 
                options={{
                    tabBarIcon: (({ size, color}) => 
                        <MaterialIcons 
                            name="pie-chart"
                            size={size}
                            color={color} 
                        />
                    )
                }}
            />
        </Navigator>
    )
}