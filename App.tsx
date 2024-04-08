import { View, Text, } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme, useTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './HF/Home';
import Blog from './HF/Blog';
import MyTheme from './HF/themeColors/MyTheme';

export default function App() {



  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ contentStyle:{backgroundColor:MyTheme.colors.primary}, headerShown:false} }  >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Blog' component={Blog}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}