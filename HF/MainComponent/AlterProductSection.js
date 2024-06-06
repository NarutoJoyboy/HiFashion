import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    Image,
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
        <Image source={{uri:item.image}} width={width / 3.4} height={height / 4.5}/>
        <View style={styles.productDetails}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: FontFamily.txt.fontFamily,
              marginBottom: 10,
            }}>
            Product Name
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              fontFamily: FontFamily.txt.fontFamily,
            }}>
            Product Type
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: 'grey',
                borderRadius: 15,
                alignSelf: 'center',
                marginRight: 10,
              }}>
              <Feather name="minus" size={18} color="black" />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 19,
                fontFamily: FontFamily.txt.fontFamily,
              }}>
              1
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: 'grey',
                borderRadius: 15,
                alignSelf: 'center',
                marginLeft: 10,
              }}>
              <Feather name="plus" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: FontFamily.txt.fontFamily,
            }}>
            $120
          </Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      margin: 20,
      flexDirection: 'row',
    },
    productDetails: {margin: 10},
  });
  