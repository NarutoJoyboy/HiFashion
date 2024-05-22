import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import HomeImg1 from '../Icons/HomeImg1';
import FontFamily from './Colors/style';
import MyTheme from './Colors/MyTheme';

const {width, height} = Dimensions.get('screen');

export default function ProductCard({item}) {
  // const item = props.item;
  return (
    <View style={{marginTop: 10}}>
        <TouchableOpacity activeOpacity={0.6}>

      <HomeImg1 width={width / 2} height={height / 3} />
      <Text style={styles.txt}>{item.name}</Text>
      <Text style={styles.txt1} numberOfLines={1}>{item.productDetails}</Text>
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
    marginHorizontal: 10,
    fontFamily: FontFamily.txt.fontFamily,
  },
  txt1: {
    fontSize: 14,
    color: 'grey',
    marginHorizontal: 10,
    fontFamily: FontFamily.txt.fontFamily,
    width:width/2.2,
  },
  txt2: {
    fontSize: 18,
    color: MyTheme.colors.priceColor,
    marginHorizontal: 10,
    fontFamily: FontFamily.txt.fontFamily,
    marginTop:5
  },
});
