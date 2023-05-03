import React, { Component } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNaviagtion from './BottomTabNaviagtion'

export default function Navigation() {

    const theme = {...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FFFFFF',
        },
      };

    return (
        <NavigationContainer theme={theme}>
            <RootNavigator/>
        </NavigationContainer>
    );
  }

  const Stack = createNativeStackNavigator()

function RootNavigator() {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={BottomTabNaviagtion} name='root'/>
        </Stack.Navigator>
    )
}
