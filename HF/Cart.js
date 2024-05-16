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


  const Header = () => {
    return (
      <View style={styles.header}>
        <View>
          <FontAwesome6 name='arrow-left' size={25} color={"black"}/>
        </View>
        <View>
        <Text style={[FontFamily.txt, {fontSize: 20, color: 'black'}]}>
          CART
        </Text>
        <Divider />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
     <Header />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
