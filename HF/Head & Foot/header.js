import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../../Icons/Menu.png')}/>
        <Text style={styles.txt}>Classy Store</Text>
      <View style={styles.rightHead}>
        <Image source={require('../../Icons/Search.png')}/>
        <Image source={require('../../Icons/Menu.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
  },
  rightHead:{
    flexDirection:'row',
  },
  txt:{
    fontSize:18,
    color:'black',
    width:80,
    textAlign:'center',
    fontFamily:'TenorSans-Regular',
    // fontWeight:'bold',
    // fontStyle:'italic'

    }
})