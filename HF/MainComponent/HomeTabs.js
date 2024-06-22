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
import FontFamily from '../Colors/style';

const {width, height} = Dimensions.get('screen');

export default function HomeTabs() {
  const FilterData = [
    {name: 'All', id: 1},
    {name: 'Apparel', id: 2},
    {name: 'Dress', id: 3},
    {name: 'Tshirt', id: 4},
    {name: 'Bag', id: 5},
  ];

  const TabData = [
    {image: "Prem", id: 1},
    {image: "Ram", id: 2},
    {image: "Shyam", id: 3},
    {image: "GhanShyam", id: 4},
    {image: "Laxman", id: 5},
  ]

  const [tabNo, setTabNo] = useState(FilterData[0].id);

  return (
    <Animated.View style={styles.container}>
      <Animated.FlatList
        data={TabData}
        // keyExtractor={item => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View  key={item.id}>

            { item.id === tabNo && <View>
                
                {/* {item.image} */}
                <Text style={{color:'black', fontSize:30}}>{item.image}</Text>
                <Text style={{color:'black', position:'absolute', top:20}}>{tabNo} my nmae is Prem</Text>
            </View>}
            </View>
        );
        }}
      />
      <Animated.View style={styles.containerfilterBox}>
        <View style={styles.containerfilter}>
          {FilterData.map(item => {
            return (
              <TouchableOpacity
                style={styles.filterBox}
                key={item.id}
                activeOpacity={0.6}
                onPress={() => setTabNo(item.id)}
                >
                <Text key={item.id} style={[styles.txtfilter, tabNo===item.id && styles.txtfilterActive]}>
                  {item.name}
                </Text>
                
                { tabNo===item.id && <View style={styles.box}></View>

                }
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
    color: '#888888',
    fontFamily: FontFamily.txt.fontFamily,
    opacity: 0.6,
  },
    txtfilterActive: {
        color: '#212806',
        fontSize: 20,
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
