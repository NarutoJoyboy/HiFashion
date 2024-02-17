import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

export default function Home() {
  const {Width, Height} = useWindowDimensions();

  const catlist = [
    {item: 'All', id: 1},
    {item: 'Apparel', id: 2},
    {item: 'Dress', id: 3},
    {item: 'Tshirt', id: 4},
    {item: 'Bag', id: 5},
  ];

  const catitemlist = [
    {name: '21WN reversible angora cardigan', id: 1, price: 120, image: require('../Icons/image10.png')},
    {name: 'Bags', id: 2, price: 120, image: require('../Icons/image10.png')},
    {name: 'Bags', id: 3, price: 120, image: require('../Icons/image10.png')},
    {name: 'Bags', id: 4, price: 120, image: require('../Icons/image10.png')},
  ];
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            source={require('../Icons/image10.png')}
            style={[styles.image10, {width: Width}]}
          />
          <TouchableOpacity style={styles.xploreBut}>
            <Text style={styles.xplorebutxt}>EXPLORE COLLECTION</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 28, color: 'black', textAlign: 'center'}}>
              New Arrival
            </Text>
            <View style={{alignSelf: 'center'}}>
              <Text style={{borderWidth: 1, width: 10, height: 10}}></Text>
            </View>
          </View>
          <View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 40,
                }}>
                {catlist.map(items => {
                  return (
                    <View key={items.id}>
                      <Text style={{fontSize: 20}}>{items.item}</Text>
                    </View>
                  );
                })}
              </View>
              <View style={{flexDirection:'row'}}>
                {catitemlist.map(item => {
                  return (
                    <View key={item.id} style={{margin:10, width:165, height:260.16, marginBottom:100 }}>
                      <Image source={item.image} style={{width:165, height:260.16}}/>
                      <View>
                        <Text style={{fontSize:14, color:'black', paddingHorizontal:20, textAlign:'center'}}>{item.name}</Text>
                        <Text>{item.price}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image10: {},
  xploreBut: {
    backgroundColor: 'black',
    width: 250,
    padding: 10,
    position: 'relative',
    bottom: 70,
    alignSelf: 'center',
  },
  xplorebutxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
});
