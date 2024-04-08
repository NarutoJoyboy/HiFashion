import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function Header() {
  return (
    <View style={styles.container}>
        <SimpleLineIcons name='menu' size={25}s color="black"/>
        <View>
        <Text style={styles.txt}>Classy</Text>
        <Text style={[styles.txt, {marginLeft:20}]}>Store</Text>

        </View>
      <View style={styles.rightHead}>
        <AntDesign name="search1" size={25}s color="black" style={styles.search}/>
        <SimpleLineIcons name="handbag" size={25} color="black" style={styles.search}/>
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
      marginHorizontal:5
    }
})