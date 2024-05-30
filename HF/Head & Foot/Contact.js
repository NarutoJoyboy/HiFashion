import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Header from './header'
import Divider from './divider'
import MyTheme from '../Colors/MyTheme'
import FontFamily from '../Colors/style'
import { Title } from '../ImpComponent/Title'


export default function Contact() {
  return (
    <View style={styles.container}>
      <Header Styles={'white'}/>
      {/* <View style={styles.title}>
        <Text style={styles.text}>Contact Us</Text>
        <Divider/>
      </View> */}
      <Title label={'CONTACT US'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        alignItems:'center',
        marginTop:30
        
    },
  text: {
    fontSize: 20,
    margin: 10,
    color:MyTheme.colors.txtColor,
    fontFamily:FontFamily.txt.fontFamily,
    letterSpacing:2
  }
})