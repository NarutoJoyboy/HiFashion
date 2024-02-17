import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './HF/Home';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}
        options={{
          headerStyle:{
            backgroundColor:'#E7EAEF',
            
          },
          headerTitle:()=>(
            <View  >
              <Text style={styles.headerTitle}>HiFashion</Text>
            </View>
          ),
          headerTitleAlign:'center',
          headerLeft:()=>(
            <View >
              <TouchableOpacity>
              <Image
              source={require('./Icons/Menu.png')}
              />
              </TouchableOpacity>
            </View>
          ),
          headerRight:()=>(
            <View style={styles.headerRight}>
              <TouchableOpacity>
              <Image
              source={require('./Icons/Search.png')}
              />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
              source={require('./Icons/shoppingbag.png')}
                />
              </TouchableOpacity>
            </View>
          )
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitle:{
    color:'black',
    fontSize:30,
  },
headerRight:{
  flexDirection:'row',
  padding:10,
  
}
  
})