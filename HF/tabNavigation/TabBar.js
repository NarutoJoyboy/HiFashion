import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import FontFamily from '../Colors/style';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function TabBar() {
  const tabs = [{ title: 'women', id: 0 }, { title: 'men', id: 1 }, { title: 'kids', id: 2 }];
  const [activeTab, setActiveTab] = useState("women");
  const [toggle, setToggle] = useState({});
  const [slide, setSlide] = useState(0);
  const scrollRef = useRef(null);
  const { width } = Dimensions.get('screen');

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToIndex({ index: slide, animated: true });
    }
  }, [activeTab]);

  const Divider = () => (
    <View style={styles.container}>
      <View style={styles.divider}>
        <View style={[styles.dividerline, { width: activeTab.length * 7 }]} />
        <View style={styles.dividerbox} />
        <View style={[styles.dividerline, { width: activeTab.length * 7 }]} />
      </View>
    </View>
  );

  const Types = [
    {
      title: 'women',
      id: 0,
      header: [
        { title: 'New', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits'] },
        { title: 'Apparel', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits'] },
        { title: 'Bag', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits'] },
        { title: 'Shoes', data: ['Sneakers', 'Heels', 'Flats'] },
        { title: 'Beauty', data: ['Makeup', 'Skincare', 'Haircare'] },
        { title: 'Accessories', data: ['Bags', 'Jewellery', 'Sunglasses'] },
      ],
    },
    {
      title: 'men',
      id: 1,
      header: [
        { title: 'New1', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits'] },
        { title: 'Apparel', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits'] },
        { title: 'Bag', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits'] },
        { title: 'Shoes', data: ['Sneakers', 'Heels', 'Flats'] },
        { title: 'Beauty', data: ['Makeup', 'Skincare', 'Haircare'] },
        { title: 'Accessories', data: ['Bags', 'Jewellery', 'Sunglasses'] },
      ],
    },
    {
      title: 'kids',
      id: 2,
      header: [
        { title: 'New2', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits'] },
        { title: 'Apparel', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits'] },
        { title: 'Bag', data: ['Tops', 'Dresses', 'Bottoms', 'Jumpsuits'] },
        { title: 'Shoes', data: ['Sneakers', 'Heels', 'Flats'] },
        { title: 'Beauty', data: ['Makeup', 'Skincare', 'Haircare'] },
        { title: 'Accessories', data: ['Bags', 'Jewellery', 'Sunglasses'] },
      ],
    },
  ];

  const toggleButton = (index) => {
    setToggle((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const SliderScreen = (e) => {
    const newSlide = Math.round(e.nativeEvent.contentOffset.x / width);
    setSlide(newSlide);
    if (newSlide === 0) {
      setActiveTab('women');
    } else if (newSlide === 1) {
      setActiveTab('men');
    } else {
      setActiveTab('kids');
    }
  };

  const RenderItem = ({ data }) => (
    <View>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={SliderScreen}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View>
            <FlatList
              data={item.header}
              keyExtractor={(item) => item.title}
              renderItem={({ item, index }) => (
                <View style={{ width: width - 20 }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderWidth: 1,
                      width: width - 80,
                    }}
                    onPress={() => toggleButton(index)}
                  >
                    <Text style={{ color: 'black', fontSize: 20 }}>{item.title}</Text>
                    <AntDesign
                      name={toggle[index] ? 'up' : 'down'}
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>

                  {toggle[index] && (
                    <FlatList
                      data={item.data}
                      keyExtractor={(item) => item}
                      renderItem={({ item }) => (
                        <TouchableOpacity>
                          <Text style={{ color: 'black' }}>{item}</Text>
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
    <View style={{ marginVertical: 30 }}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          borderBottomWidth: 0.5,
          borderBottomColor: 'grey',
          width: width - 80,
          paddingBottom: 10,
        }}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            activeOpacity={0.6}
            style={{ marginRight: 50 }}
            onPress={() => setActiveTab(tab.title)}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: FontFamily.txt.fontFamily,
                textAlign: 'center',
                color: activeTab === tab.title ? 'black' : 'gray',
              }}
            >
              {tab.title.toUpperCase()}
            </Text>
            {activeTab === tab.title && <Divider />}
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        ref={scrollRef}
        data={Types.filter((type) => type.title === activeTab)}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <RenderItem data={[item]} />}
      />
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
    transform: [{ rotate: '45deg' }],
    margin: 1,
    borderColor: '#DD8560',
    backgroundColor: '#DD8560',
  },
});
