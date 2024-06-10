import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FontFamily from '../Colors/style';
import MyTheme from '../Colors/MyTheme';
import useStore from '../Zustand/UseStore';

export const ColorSelector = ({color, productId}) => {
  const {selectColor, setSelectColor} = useStore(state => ({
    selectColor: state.selectColor[productId],
    setSelectColor: state.setSelectColor,
  }));

  


  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
      <Text style={styles.txt}>Color</Text>
      {color &&
        color.map((item, index) => (
          <TouchableOpacity
            onPress={() => setSelectColor(productId, item)}
            style={
              selectColor !== item
                ? [styles.boxBorderInactive]
                : [styles.boxBorderActive]
            }
            key={index}>
            <View style={[styles.boxColor, {backgroundColor: item}]}></View>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export const SizeSelector = ({size, productId}) => {
  const {selectSize, setSelectSize} = useStore(state => ({
    selectSize: state.selectSize[productId],
    setSelectSize: state.setSelectSize,
  }));

  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
      <Text style={[styles.txt, {marginRight: 20}]}>Size</Text>
      {size &&
        size.map((item, index) => (
          <TouchableOpacity
            onPress={() => setSelectSize(productId, item)}
            style={[
              styles.sizeActiveBoxBorder,
              {backgroundColor: selectSize !== item ? 'white' : 'black'},
            ]}
            key={index}>
            <Text
              style={{
                color: selectSize !== item ? 'black' : 'white',
                fontFamily: FontFamily.txt.fontFamily,
                fontSize: 15,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  boxBorderInactive: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxBorderActive: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#888888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxColor: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  txt: {
    fontSize: 15,
    fontFamily: FontFamily.txt.fontFamily,
    marginRight: 10,
    color: MyTheme.colors.dividerColor,
  },
  sizeActiveBoxBorder: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'grey',
    alignItems: 'center',
    marginRight: 5,
  },
});
