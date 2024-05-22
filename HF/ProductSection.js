import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Head & Foot/header';
import Filter from '../Icons/filter';
import ListView from '../Icons/ListView';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyTheme from './Colors/MyTheme';
import FontFamily from './Colors/style';
import Feather from 'react-native-vector-icons/Feather';
import ProductCard from './ProductCard';
import { getProducts } from './firebase/System';


const {width, height} = Dimensions.get('screen');

export default function ProductSection() {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    const ppp =  getProducts();

    console.log('....................................', ppp)
  }, [])
  
  const FilterComponent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>4500 APPAREL</Text>

        <View style={styles.last3}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => console.warn('delete the filter')}>
            <Text style={[styles.txt, {marginRight: 10}]}>New</Text>
            <AntDesign name={'caretdown'} color={'grey'} size={13} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            activeOpacity={0.6}
            onPress={() => console.warn('delete the filter')}>
            <ListView width={25} height={25} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            activeOpacity={0.6}
            onPress={() => console.warn('Filter')}>
            <Filter width={25} height={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const FilteredData = [{data: 'Women'}, {data: 'All Apparel'}];
  const FilteredDataComponent = () => {
    return (
      <FlatList
        data={FilteredData}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        renderItem={({item}) => (
          <View
            style={{
              borderWidth: 1,
              padding: 7,
              borderRadius: 20,
              marginLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: '#DEDEDE',
            }}>
            <Text style={styles.txt}>{item.data}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => console.warn('delete the filter')}>
              <Feather
                name={'x'}
                color={'#555555'}
                size={18}
                style={{paddingHorizontal: 5}}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <View>
            <Header />
            <FilterComponent />
            <FilteredDataComponent />
          </View>
        }
        
        data={productData}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <ProductCard item = {item._data}/>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  txt: {
    color: MyTheme.colors.txtColor,
    fontSize: 17,
    fontFamily: FontFamily.txt.fontFamily,
  },
  button1: {
    flexDirection: 'row',
    backgroundColor: 'rgb(240, 240, 240)',
    paddingVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 33,
  },
  last3: {
    flexDirection: 'row',
  },
  button2: {
    borderRadius: 25,
    alignSelf: 'center',
    padding: 7,
    backgroundColor: 'rgb(240, 240, 240)',
    marginLeft: 10,
  },
});