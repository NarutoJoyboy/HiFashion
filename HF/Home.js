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
import {Divider} from '@rneui/themed';

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
      <View style={styles.container}>
        <View style={styles.divider} />
        <View style={styles.boxContainer}>
          <View style={styles.smallBox} />
        </View>
        <View style={styles.divider} />
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
              NEW ARRIVAL
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
                      <TouchableOpacity>
                      <Text style={styles.catlistitemstyle}>{items.item}</Text>
                      </TouchableOpacity>

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
                <View style={{marginTop:20}}>

                <DividerLine />
                </View>
              </View>
            </View>
            <View>
              <Text>COLLECTIONS</Text>
              <View style={{width: Width}}>
                <Image source={require('../Icons/Frame2.png')} />
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
    marginBottom: 30,
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:150,
    marginBottom:30
  },
  divider: {
    flex: 1,
    height: 0.5,
    backgroundColor: 'grey',
  },
  boxContainer: {
    width: 15, // Adjust the width of the box container
    alignItems: 'center',
  },
  smallBox: {
    width: 10, // Adjust the width of the small box
    height: 10, // Adjust the height of the small box
    borderWidth: 0.5,
    transform:[{rotate:'45deg'}],
    borderColor:'grey'
  },
});
