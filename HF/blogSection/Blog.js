import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Divider from '../Head & Foot/divider';
import Header from '../Head & Foot/header';
import BlogPost from './BlogPost';
import FontFamily from '../Colors/style';


export default function Blog() {
  const filter = ['Fashion', 'Promo', 'Policy', 'Lookbook', 'Sale'];

  const FilterComponent = ({item, index}) => {
    return (
      <View style={{paddingRight: 20}}>
        <FlatList
          data={filter}
          keyExtractor={index => index.toString()}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.filterstyle} >
        <TouchableWithoutFeedback >
        <Text style={styles.filtertext}>{item}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <FlatList
    ListHeaderComponent={
      <View style={styles.container}>
    <Header />
    <View style={styles.title}>
         <Text style={[FontFamily.txt, {fontSize: 20, color: 'black',}]}>BLOG</Text>
         <Divider />
      </View>
        
      </View>
  }
  data={[1]}
  keyExtractor={( index) => index.toString()}
  renderItem={({item, index}) => {
    return (
      <View style={{flex: 1, marginBottom:20}}>
        <FilterComponent />
        <BlogPost />
      </View>
    );
  }}

    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterstyle: {
    marginLeft: 22,
    marginVertical: 25,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#F9F9F9',
    borderRadius: 18,
  },
  filtertext: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'TenorSans-Regular',
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical:20,
    

  },
});
