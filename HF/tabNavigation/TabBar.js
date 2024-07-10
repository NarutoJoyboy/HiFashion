import {
  View,
  Text,
  SectionList,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontFamily from '../Colors/style';

export default function TabBar() {
  const {Width, Height} = Dimensions.get('screen');

  const tabs = [{title: 'women'}, {title: 'men'}, {title: 'kids'}];

  const [activeTab, setActiveTab] = useState('women');

  const Divider = () => {
    return (
      <View style={styles.container}>
        <View style={styles.divider}>
          <View style={[styles.dividerline, {width: activeTab.length * 7}]} />
          <View style={styles.dividerbox} />
          <View style={[styles.dividerline, {width: activeTab.length * 7}]} />
        </View>
      </View>
    );
  };

  // const Data = [
  //   {data: "women",
  //   {title: 'New', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
  //   {title: 'Apparel', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
  //   {title: 'Bag', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
  //   {title: 'Shoes', data: ['Sneakers', 'Heels', 'Flats']},
  //   {title: 'Beauty', data: ['Makeup', 'Skincare', 'Haircare']},
  //   {title: 'Accessories', data: ['Bags', 'Jewellery', 'Sunglasses']},
  //   }
  // ];

  const Types = [
    {
      title: 'women',
      header: [
        {title: 'New', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
        {title: 'Apparel', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
        {title: 'Bag', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
        {title: 'Shoes', data: ['Sneakers', 'Heels', 'Flats']},
        {title: 'Beauty', data: ['Makeup', 'Skincare', 'Haircare']},
        {title: 'Accessories', data: ['Bags', 'Jewellery', 'Sunglasses']},
      ],
    },
    {
      title: 'men',
      header: [
        {title: 'New1', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
        {title: 'Apparel', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
        {title: 'Bag', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
        {title: 'Shoes', data: ['Sneakers', 'Heels', 'Flats']},
        {title: 'Beauty', data: ['Makeup', 'Skincare', 'Haircare']},
        {title: 'Accessories', data: ['Bags', 'Jewellery', 'Sunglasses']},
      ],
    },
    {
      title: 'kids',
      header: [
        {title: 'New2', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
        {title: 'Apparel', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
        {title: 'Bag', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
        {title: 'Shoes', data: ['Sneakers', 'Heels', 'Flats']},
        {title: 'Beauty', data: ['Makeup', 'Skincare', 'Haircare']},
        {title: 'Accessories', data: ['Bags', 'Jewellery', 'Sunglasses']},
      ],
    },
  ];

  // const menData = [
  //   {title: 'New1', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
  //   {title: 'Apparel', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
  //   {title: 'Bag', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
  //   {title: 'Shoes', data: ['Sneakers', 'Heels', 'Flats']},
  //   {title: 'Beauty', data: ['Makeup', 'Skincare', 'Haircare']},
  //   {title: 'Accessories', data: ['Bags', 'Jewellery', 'Sunglasses']},
  // ];

  // const kidsData = [
  //   {title: 'New2', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
  //   {title: 'Apparel', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
  //   {title: 'Bag', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits']},
  //   {title: 'Shoes', data: ['Sneakers', 'Heels', 'Flats']},
  //   {title: 'Beauty', data: ['Makeup', 'Skincare', 'Haircare']},
  //   {title: 'Accessories', data: ['Bags', 'Jewellery', 'Sunglasses']},
  // ];

  const RenderItem = ({data}) => {
    return (
      <View>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => {
            return (
              <View style={{width: Width, }}>
                <FlatList
                  data={item.header}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({item}) => {
                    return (
                      <View>
                        <Text>{item.title}</Text>
                        {activeTab}
                        <FlatList
                        data={item.data}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({item}) => {
                          return (
                            <View>
                              <Text>{item}</Text>
                            </View>
                          );
                        }}
                        />
                      </View>
                    );
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <View style={{marginVertical: 30}}>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        {tabs.map((tab, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{marginRight: 50}}
              onPress={() => setActiveTab(tab.title)}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: FontFamily.txt.fontFamily,
                  textAlign: 'center',
                  color: activeTab === tab.title ? 'black' : 'gray',
                }}>
                {tab.title.toUpperCase()}
              </Text>
              {activeTab === tab.title ? <Divider /> : null}
            </TouchableOpacity>
          );
        })}
      </View>
      <RenderItem data={Types} activeType = {ite} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerline: {
    borderBottomWidth: 1,
    borderColor: '#DD8560',
  },
  dividerbox: {
    borderWidth: 5,
    width: 7,
    height: 7,
    transform: [{rotate: '45deg'}],
    margin: 1,
    borderColor: '#DD8560',
    backgroundColor: '#DD8560',
  },
});
