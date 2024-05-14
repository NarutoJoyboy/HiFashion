import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import Divider from './Head & Foot/divider';
import FontFamily from './Colors/style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';



export default function Cart() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
      <FontAwesome6 name='arrow-left' size={25} color={'black'}  />
        <Text style={[FontFamily.txt, {fontSize: 20, color: 'black'}]}>
          CART
        </Text>
        <Divider />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
