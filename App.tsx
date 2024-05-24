import { View, Text, } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme, useTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './HF/MainComponent/Home';
import Blog from './HF/blogSection/Blog';
import MyTheme from './HF/Colors/MyTheme';
import BlogPostDetails from './HF/blogSection/BlogPostDetails';
import Menu from './HF/MainComponent/Menu';
import Cart from './HF/MainComponent/Cart';
import ProductSection from './HF/MainComponent/ProductSection';

export default function App() {



  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ contentStyle:{backgroundColor:MyTheme.colors.primary}, headerShown:false} }  >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Blog' component={Blog}/>
        <Stack.Screen name='BlogPostDetails' component={BlogPostDetails}/>
        <Stack.Screen name='Menu' component={Menu} options={{
          animation:'slide_from_left'
        }}/>
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name='ProductSection' component={ProductSection} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}