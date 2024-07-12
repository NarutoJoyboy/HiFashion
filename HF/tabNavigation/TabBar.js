import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import FontFamily from '../Colors/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyTheme from '../Colors/MyTheme';
import SvgIcons from '../../Icons/SvgIcons';
import { FooterComponent1 } from '../Head & Foot/footerComponent1';
import Divider from '../Head & Foot/divider';

const tabs = [
  {title: 'women', id: 0},
  {title: 'men', id: 1},
  {title: 'kids', id: 2},
];

const Types = [
  {
    title: 'women',
    id: 0,
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
    id: 1,
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
    id: 2,
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

export default function TabBar() {
  const [activeTab, setActiveTab] = useState('women');
  const [toggle, setToggle] = useState({});
  const [slide, setSlide] = useState(0);
  const scrollRef = useRef(null);
  const {width} = Dimensions.get('screen');
  const [expandIndex, setExpandIndex] = useState({});

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToIndex({index: slide, animated: true});
    }
  }, [activeTab]);

  const BottomDivider = () => (
    <View style={styles.container}>
      <View style={styles.divider}>
        <View style={[styles.dividerline, {width: activeTab.length * 7}]} />
        <View style={styles.dividerbox} />
        <View style={[styles.dividerline, {width: activeTab.length * 7}]} />
      </View>
    </View>
  );

  const toggleButton = index => {
    setExpandIndex((prev)=>({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const SliderScreen = e => {
    const newSlide = Math.round(e.nativeEvent.contentOffset.x / width);
    setSlide(newSlide);
    setActiveTab(tabs[newSlide].title);
  };

  const RenderItem = ({data}) => (
    <View>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={SliderScreen}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View>
            <FlatList
              data={item.header}
              keyExtractor={(item, index) => (item.title + index).toString()}
              renderItem={({item, index}) => (
                <View style={{width: width - 20}}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: width - 80,
                      marginVertical:10,
                    }}
                    onPress={() => toggleButton(index)}>
                    <Text
                      style={{
                        color: MyTheme.colors.txtColor,
                        fontSize: 20,
                        fontFamily: FontFamily.txt.fontFamily,
                      }}>
                      {item.title}
                    </Text>
                    <AntDesign
                      name={expandIndex[index] ? 'up' : 'down'}
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>

                  {expandIndex[index] && (
                    <FlatList
                      data={item.data}
                      keyExtractor={(item, index) => (item + index).toString()}
                      renderItem={({item}) => (
                        <TouchableOpacity style={{margin:10}}>
                          <Text style={{color: MyTheme.colors.text, fontFamily:FontFamily.txt.fontFamily, fontSize:15}}>{item}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  )}
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );

  return (
    <ScrollView style={{marginVertical: 30}}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          borderBottomWidth: 0.5,
          borderBottomColor: 'grey',
          width: width - 80,
          paddingBottom: 10,
        }}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            activeOpacity={0.6}
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
            {activeTab === tab.title && <BottomDivider />}
          </TouchableOpacity>
        ))}
      </View>
      <View style={{marginBottom: 20}}>
        <FlatList
          ref={scrollRef}
          // initialScrollIndex={tabs.findIndex((tab) => tab.title === activeTab)}
          data={Types.filter(type => type.title === activeTab)}
          keyExtractor={(item, index) => (item.title + index).toString()}
          renderItem={({item}) => <RenderItem data={[item]} />}
        />
      </View>
      <TouchableOpacity style={styles.contactButton}>
        <SvgIcons name="Call" width={25} height={25} />
        <Text style={styles.contactButtonTxt}>(786) 713-8616</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactButton}>
        <SvgIcons name="Location" width={25} height={25} />
        <Text style={styles.contactButtonTxt}>Store locator</Text>
      </TouchableOpacity>

      <Divider/>
      <FooterComponent1/>
    </ScrollView>
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
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  contactButtonTxt: {
    fontSize: 18,
    color: MyTheme.colors.dividerColor,
    fontFamily: FontFamily.txt.fontFamily,
    marginLeft: 10,
  },
});
