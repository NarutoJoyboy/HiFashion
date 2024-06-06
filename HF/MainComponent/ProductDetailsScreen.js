import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import HomeImg1 from '../../Icons/HomeImg1';
import Feather from 'react-native-vector-icons/Feather';
import FontFamily from '../Colors/style';

const {width, height} = Dimensions.get('window');

export default function ProductDetailsScreen({route}) {

  const {item} = route.params;
  return (
    <View style={styles.container}>
      {/* <Image source={require('../Icons/')}/> */}
      {/* <HomeImg1 width={width / 3.4} height={height / 4.5} /> */}
      <FlatList
      data={item}
      keyExtractor={(items, index)=>index.toString()}
      horizontal={true}
      pagingEnabled={true}
      renderItem={({item})=>(
        <Image source={{uri:item.image}} width={width/1.05} height={height/1.7}/>
      )}

      />
      {/* <Image source={{uri:item.image}} width={width/1.05} height={height/1.7}/> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:10,
    flexDirection: 'row',
  },
  productDetails: {margin: 10},
});
