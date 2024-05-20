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
import React, {useState} from 'react';
import FontFamily from './Colors/style';
import HomeImg1 from '../Icons/HomeImg1';

const {width, height} = Dimensions.get('screen');

export default function HomeTabs() {
  const FilterData = [
    {name: 'All', id: 1},
    {name: 'Apparel', id: 2},
    {name: 'Dress', id: 3},
    {name: 'Tshirt', id: 4},
    {name: 'Bag', id: 5},
  ];

  const [tabNo, setTabNo] = useState(FilterData[0].id);

  return (
    <Animated.View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={item => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => {
          return <HomeImg1 width={width} height={height} />;
        }}
      />
      <Animated.View style={styles.containerfilterBox}>
        <View style={styles.containerfilter}>
          {FilterData.map(item => {
            return (
              <TouchableOpacity
                style={styles.filterBox}
                key={item.id}
                activeOpacity={0.6}>
                <Text key={item.id} style={styles.txtfilter}>
                  {item.name}
                </Text>
                <View style={styles.box}></View>
                {}
              </TouchableOpacity>
            );
          })}
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerfilterBox: {
    position: 'absolute',
    top: 30,
    flex: 1,
  },
  containerfilter: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 30,
    alignSelf: 'center',
  },
  filterBox: {
    alignContent: 'center',
    marginHorizontal: '3%',
  },
  txtfilter: {
    fontSize: 18,
    color: 'black',
    fontFamily: FontFamily.txt.fontFamily,
  },
  box: {
    width: 5,
    backgroundColor: '#DD8560',
    padding: 4,
    transform: [{rotate: '45deg'}],
    marginVertical: 5,
    alignSelf: 'center',
  },
});
