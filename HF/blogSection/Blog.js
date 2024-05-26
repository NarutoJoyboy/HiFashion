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
import {FooterComponent1} from '../Head & Foot/footerComponent1';
import { Title } from '../ImpComponent/Title';

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
      <View style={styles.filterstyle}>
        <TouchableWithoutFeedback>
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
          <Title label={"BLOG"}/>
        </View>
      }
      ListFooterComponent={
        <View>
          <TouchableWithoutFeedback
            onPress={() => console.warn('Load more content')}>
            <View style={styles.buttonStyle}>
              <Text style={[styles.Button, FontFamily.txt]}>Load More</Text>
              <Ionicons name="add-sharp" size={22} color={'black'} />
            </View>
          </TouchableWithoutFeedback>
          <FooterComponent1 />
        </View>
      }
      data={[1]}
      keyExtractor={index => index.toString()}
      renderItem={() => {
        return (
          <View style={{flex: 1, marginBottom: 20}}>
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
    marginVertical: 20,
  },
  Button: {
    fontSize: 19,
    fontFamily: 'TenorSans-Regular',
    margin: 10,
    color: 'black',
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.2,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 30,
    borderColor: 'grey',
  },
});
