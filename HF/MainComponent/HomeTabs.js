import {
  View,
  Text,
  FlatList,
  Animated,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontFamily from '../Colors/style';
import ProductCard from './ProductCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const FilterData = [
  {name: 'All'},
  {name: 'Apparel'},
  {name: 'Dress'},
  {name: 'Tshirt'},
  {name: 'Bag'},
];

export default function HomeTabs({data}) {
  const navigation = useNavigation();
  const [tabNo, setTabNo] = useState('All');
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    const filteredData = data.filter(item =>
      item.categories.includes(tabNo.toLowerCase()),
    );
    setFiltered(filteredData);
  }, [tabNo]);

  const renderItem = ({item}) => {
    return (
      <View style={{margin: 10}}>
        <ProductCard item={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titlebox}>
        {FilterData.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => setTabNo(item.name)}>
              <View>
                <Text
                  style={
                    tabNo === item.name
                      ? styles.titletxtActive
                      : styles.titletxt
                  }>
                  {item.name}
                </Text>
                {tabNo === item.name && <View style={styles.labelIndicator} />}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {tabNo === 'All'
          ? data.slice(0, 4).map((item, index) => {
              return (
                <View style={{margin: 10}} key={index}>
                  <ProductCard item={item} />
                </View>
              );
            })
          : filtered.slice(0, 4).map((item, index) => {
              return (
                <View style={{margin: 10}} key={index}>
                  <ProductCard item={item} />
                </View>
              );
            })}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductSection', {tabNo})}
        activeOpacity={0.6}
        style={{marginVertical: 10}}>
        <View style={styles.explorecollectionbut}>
          <Text style={styles.txt3}>EXPLORE MORE</Text>
          <AntDesign name="arrowright" size={20} color={'black'} />
          {/* <SvgIcons name="ForwardArrow" width={width / 20} height={height / 30} /> */}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titlebox: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  titletxtActive: {
    fontSize: 20,
    fontFamily: FontFamily.txt.fontFamily,
    color: 'black',
    marginHorizontal: 10,
    paddingHorizontal: 4,
  },
  titletxt: {
    fontSize: 18,
    fontFamily: FontFamily.txt.fontFamily,
    color: 'gray',
    marginHorizontal: 10,
    paddingHorizontal: 4,
  },
  labelIndicator: {
    borderWidth: 1,
    width: 8,
    height: 8,
    transform: [{rotate: '45deg'}],
    alignSelf: 'center',
    backgroundColor: '#DD8560',
    borderColor: '#DD8560',
    marginTop: 5,
  },
  txt3: {
    fontSize: 17,
    alignItems: 'center',
    fontFamily: FontFamily.txt.fontFamily,
    color: 'black',
    paddingRight: 10,
  },
  explorecollectionbut: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
