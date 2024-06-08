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

export const ColorSelector = ({color}) => {

    const [selectColor, setSelectColor] = useState(null);
  return (
    <View style={{flexDirection: 'row'}}>
      {color && color.map((item, index)=>(
        <TouchableOpacity style={[styles.boxBorder, {backgroundColor:item}]} key={index}>

        </TouchableOpacity>
      ))}
      
    </View>
  );
  };

  export const SizeSelector = ({size}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        {size && size.map((item, index)=>(
          <TouchableOpacity style={[styles.boxBorder, {backgroundColor:item}]} key={index}>
  
          </TouchableOpacity>
        ))}
        
      </View>
    );
    }
  
  {/* <View style={[styles.boxBorder, {backgroundColor: item}]}></View> */}
const styles = StyleSheet.create({
  boxBorder: {
    // borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 15,
  },
});
