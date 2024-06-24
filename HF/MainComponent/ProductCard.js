import {View, Text, Dimensions, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import FontFamily from '../Colors/style';
import MyTheme from '../Colors/MyTheme';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

export default function ProductCard({item}) {
  // console.log('item...........................', item);
  const navigation = useNavigation();
  return (
    <View style={{}}>
        <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('ProductDetailsScreen', {item:item})}>

      <Image source={{uri:item.image[0]}} width={width/2.25} height={height/3}/>
      <Text style={styles.txt}>{item.name.toUpperCase()}</Text>
      <Text style={styles.txt1} numberOfLines={1}>{item.product_details}</Text>
      <Text style={styles.txt2}>${item.price}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    color: MyTheme.colors.txtColor,
    marginTop: 5,
    fontFamily: FontFamily.txt.fontFamily,
  },
  txt1: {
    fontSize: 14,
    color: 'grey',
    fontFamily: FontFamily.txt.fontFamily,
    width:width/2.4,
  },
  txt2: {
    fontSize: 18,
    color: MyTheme.colors.priceColor,
    fontFamily: FontFamily.txt.fontFamily,
    marginTop:5
  },
});
