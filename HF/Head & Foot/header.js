import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {getBrands, getProducts} from '../firebase/System';
import SvgIcons from '../../Icons/SvgIcons';
import Menu from '../MainComponent/Menu';

const {width, height} = Dimensions.get('screen');

export default function Header({Styles, visibility}) {
  const navigation = useNavigation();
  

  return (
    <View style={[styles.container, {backgroundColor: Styles}]}>
      <TouchableOpacity onPress={()=>navigation.navigate("Menu")} >
        <SvgIcons name="Menu" width={width / 15} height={height / 30} />
      </TouchableOpacity>
      <View style={{marginLeft: width / 15}}>
        <SvgIcons name="Logo" width={width / 3} height={height / 30} />
      </View>
      <View style={styles.rightHead}>
        <TouchableOpacity onPress={() => getBrands()} style={{paddingRight:10}}>
          <SvgIcons name="Search" width={width / 15} height={height / 30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <SvgIcons
            name="ShoopingBag"
            width={width / 15}
            height={height / 30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  rightHead: {
    flexDirection: 'row',

  },
  txt: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'TenorSans-Regular',
  },
  search: {
    marginHorizontal: 10,
  },
});
