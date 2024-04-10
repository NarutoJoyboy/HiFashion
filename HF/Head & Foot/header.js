import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Width = Dimensions.get('window').width;

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>console.warn('Menu')}>
        <SimpleLineIcons name='menu' size={25}s color="black"/>
        </TouchableWithoutFeedback>
        <View>
        <Text style={styles.txt}>Classy</Text>
        <Text style={[styles.txt, {marginLeft:20}]}>Store</Text>

        </View>
      <View style={styles.rightHead}>
        <TouchableWithoutFeedback onPress={()=>console.warn('Search')}>
        <AntDesign name="search1" size={25}s color="black" style={styles.search}/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>console.warn('Cart')}>
        <SimpleLineIcons name="handbag" size={25} color="black" style={styles.search}/>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin:10,
  },
  rightHead:{
    flexDirection:'row',
    
  },
  txt:{
    fontSize:18,
    color:'black',
    textAlign:'center',
    fontFamily:'TenorSans-Regular',
    },
    search:{
      marginHorizontal:10,
    }
})