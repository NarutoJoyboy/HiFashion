import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Header from './Head & Foot/header';
import Filter from '../Icons/filter';
import ListView from '../Icons/ListView';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');
export default function ProductSection() {
  const FilterComponent = () => {
    return (
      <View>
        <View>
          <Text>New</Text>
          <AntDesign name={'caretdown'} color={'black'} size={20} />
        </View>
        <View>
          <ListView width={30} height={30} />
        </View>
        <View>
          <Filter width={30} height={30} />
        </View>
      </View>
    );
  };
  return (
    <View>
      <Header />
      <FilterComponent />
    </View>
  );
}
