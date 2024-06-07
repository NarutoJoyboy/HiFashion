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
import FontFamily from '../Colors/style';
import Header from '../Head & Foot/header';
import MyTheme from '../Colors/MyTheme';
import ExportIcon from '../../Icons/ExportIcon';
import Fontisto from "react-native-vector-icons/Fontisto"
import AntDesign from "react-native-vector-icons/AntDesign"


const {width, height} = Dimensions.get('window');

export default function ProductDetailsScreen({route}) {
  const {item} = route.params;

  const CartFooter = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.box1}>
          <TouchableOpacity>
            <Fontisto name='plus-a' size={25} color={"white"}/>
          </TouchableOpacity>
          <Text style={styles.txtBasket}>ADD TO BASKET</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name='hearto' size={25} color={'white'}/>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex:1}}>
      <Header Styles={'white'} />
      <View style={styles.container}>
        <FlatList
          data={item.image}
          keyExtractor={(items, index) => index.toString()}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{marginBottom: 20}}>
              <Image
                source={{uri: item}}
                width={width / 1.05}
                height={height / 1.7}
              />
            </View>
          )}
        />
        <View style={styles.detailsbox}>
          <View>
            <Text style={styles.txtTitle}>{item.name.toUpperCase()}</Text>
            <Text style={styles.description}>{item.product_details}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>

          <TouchableOpacity>
            <ExportIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>
        <CartFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  productDetails: {margin: 10},
  txtTitle: {
    fontSize: 20,
    fontFamily: FontFamily.txt.fontFamily,
    color: MyTheme.colors.txtColor,
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    fontFamily: FontFamily.txt.fontFamily,
    color: MyTheme.colors.dividerColor,
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontFamily: FontFamily.txt.fontFamily,
    color: MyTheme.colors.priceColor,
    marginBottom: 5,
  },
  detailsbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'black',
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    height:60

  },
  box1:{
    alignContent:'center'
  }
});
