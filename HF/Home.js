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
    {
      name: '21WN reversible angora cardigan',
      id: 1,
      price: 120,
      image: require('../Icons/image10.png'),
    },
    {name: 'Bags', id: 2, price: 120, image: require('../Icons/image10.png')},
    {name: 'Bags', id: 3, price: 120, image: require('../Icons/image10.png')},
    {name: 'Bags', id: 4, price: 120, image: require('../Icons/image10.png')},
  ];

  const DividerLine = () => {
    return (
      <View style={styles.dividerposition}>
        <Text style={styles.dividerbox}></Text>
      </View>
    );
  };
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
          <View>
            <Text style={{fontSize: 28, color: 'black', textAlign: 'center'}}>
              New Arrival
            </Text>
            <DividerLine />
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
                    <View key={items.id} style={styles.listitems}>
                      <Text style={styles.catlistitemstyle}>{items.item}</Text>
                    </View>
                  );
                })}
              </View>
              <View style={{flexDirection: 'row'}}>
                {catitemlist.map(item => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        margin: 10,
                        width: 165,
                        height: 260.16,
                        marginBottom: 100,
                      }}>
                      <Image
                        source={item.image}
                        style={{width: 165, height: 260.16}}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'black',
                            paddingHorizontal: 10,
                            textAlign: 'center',
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            color: 'black',
                            textAlign: 'center',
                          }}>
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttontxt2}>EXPLORE MORE</Text>
                <Image source={require('../Icons/ForwardArrow.png')} />
              </TouchableOpacity>
              <View>
                <DividerLine />
                <View style={styles.brands}>
                  <Text style={styles.brandtxt}>PRADA</Text>
                  <Text style={styles.brandtxt}>BURBERRY</Text>
                  <Text style={styles.brandtxt}>PRADA</Text>
                </View>
                <View style={styles.brands}>
                  <Text style={styles.brandtxt}>Cartier</Text>
                  <Text style={styles.brandtxt}>GUCCI</Text>
                  <Text style={styles.brandtxt}>TIFANNY & CO.</Text>
                </View>
                <DividerLine />
              </View>
            </View>
            <View>
              <Text>COLLECTIONS</Text>
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
  listitems: {
    marginVertical: 25,
  },
  catlistitemstyle: {
    fontSize: 20,
    color: 'black',
  },
  button2: {
    borderWidth: 1,
    alignSelf: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 8,
    marginBottom:30
    
  },
  buttontxt2: {
    fontSize: 20,
    color: 'black',
    paddingRight: 10,
  },
  brands: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  brandtxt: {
    color: 'black',
    fontSize: 20,
  },
  dividerbox: {
    borderWidth: 1,
    width: 10,
    height: 10,
  },
  dividerposition: {
    alignSelf: 'center',
    marginBottom:30,
    marginTop:10
  },
});
