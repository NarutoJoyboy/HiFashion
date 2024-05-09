import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Divider from './Head & Foot/divider';
import Header from './Head & Foot/header';
import {
  FooterComponent1,
  FooterComponent2,
} from './Head & Foot/footerComponent1';
import MyTheme from './Colors/MyTheme';
import FontFamily from './Colors/style';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function Home({navigation}) {
  const Brnds = [
    {name: 'PRADA', id: 1},
    {name: 'BURBERRY', id: 2},
    {name: 'BOSS', id: 3},
    {name: 'Cartier', id: 4},
    {name: 'GUCCI', id: 5},
    {name: 'TIFFANT & CO.', id: 6},
  ];

  const ShippingDetails = [
    {
      img: require('../Icons/sticker1.png'),
      name: 'Fast shipping Free on order above $25.',
      id: 1,
    },
    {
      img: require('../Icons/sticker2.png'),
      name: 'Sustainable process from start to finish.',
      id: 2,
    },
    {
      img: require('../Icons/sticker3.png'),
      name: 'Unique designs and high quality materials.',
      id: 3,
    },
    {
      img: require('../Icons/sticker4.png'),
      name: 'Giving priority to customers satisfaction.',
      id: 4,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Header />
        <View>
          <Image
            source={require('../Icons/image10.png')}
            style={{width: Width}}
          />
          <View
            style={{
              position: 'absolute',
              top: Height / 2.5,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={[styles.txt1]}>LUXURY</Text>
            <Text style={styles.txt1}>FASHION</Text>
            <Text style={styles.txt1}>ACCESSORIES</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              top: Height / 1.6,
              alignSelf: 'center',
            }}>
            <TouchableOpacity style={styles.explorebut}>
              <Text style={styles.explorebutstyle}>EXPLORE COLLECTION</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <Text style={styles.txt2}>NEW ARRIVAL</Text>
          <Divider />
        </View>
        <View style={{flex: 1, height: Height}}>
          {/* <Collectiontabs /> */}
        </View>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                marginBottom: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text style={styles.txt3}>EXPLORE MORE</Text>
              {/* <Image source={require('../Icons/ForwardArrow.png')}/> */}
              <AntDesign name="arrowright" size={20} color={'black'} />
            </View>
          </TouchableWithoutFeedback>
          <Divider />
        </View>

        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {Brnds.map(item => {
            return (
              <Text
                key={item.id}
                style={{fontSize: 20, padding: 20, color: 'black'}}>
                {item.name}
              </Text>
            );
          })}
          <Divider />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txt4}>COLLECTIONS</Text>
          <Image
            source={require('../Icons/Frame2.png')}
            style={{width: Width}}
          />
          <Image
            source={require('../Icons/image9.png')}
            style={styles.collectionImage}
          />
          <Image
            source={require('../Icons/Video.png')}
            style={styles.videoImage}
          />
        </View>
        <View>
          <Text style={styles.txt2}>Just for you</Text>
          <Divider />
          <FlatList
            data={[1, 2, 3]}
            keyExtractor={item => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity activeOpacity={0.5}>
                  <View>
                    <Image
                      source={require('../Icons/Frame2.png')}
                      style={{
                        width: Width / 1.5,
                        height: Height / 2.5,
                        margin: 10,
                      }}
                    />
                  </View>
                  <Text style={styles.txt5}>
                    Harris Tweed Three Button Jacket
                  </Text>
                  <Text style={styles.txt6}>$120</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={styles.classyStoreContainer}>
          <Text>Classy Store</Text>
          <Text style={styles.classyStoreText}>
            Making a luxurious lifestyle accessible for a generous group of
            women is our daily drive
          </Text>
          <Divider />
          <View style={styles.shippingDetailsContainer}>
            {ShippingDetails.map(item => {
              return (
                <View
                  key={item.id}
                  style={{
                    margin: 10,
                    width: Width / 2.4,
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={item.img} />
                  <Text style={{textAlign: 'center'}}>{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <FooterComponent1 />
        <FooterComponent2 />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Text Styles
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  txt1: {
    fontSize: 45,
    color: 'white',
    fontFamily: FontFamily.txt.fontFamily,
  },
  txt2: {
    fontSize: 20,
    alignItems: 'center',
    fontFamily: FontFamily.txt.fontFamily,
    color: 'black',
  },
  txt3: {
    fontSize: 17,
    alignItems: 'center',
    fontFamily: FontFamily.txt.fontFamily,
    color: 'black',
    paddingRight: 10,
  },
  txt4: {
    fontSize: 24,
    fontFamily: FontFamily.txt.fontFamily,
    marginVertical: 20,
  },
  classyStoreText: {
    fontSize: 16,
  },

  // Image Styles
  collectionImage: {
    width: Width / 1.4,
    marginTop: 30,
    marginBottom: 10,
  },
  videoImage: {
    width: Width,
    height: Height / 3,
  },

  // Container Styles
  classyStoreContainer: {
    backgroundColor: 'rgba(221,133,96, 0.5)',
    alignItems: 'center',
    padding: 10,
  },
  shippingDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  explorebut: {
    backgroundColor: 'black',
    borderRadius: 30,
    width: 270,
    padding: 10,
    opacity: 0.6,
  },
  explorebutstyle: {
    color: 'white',
    fontSize: 18,
    fontFamily: FontFamily.txt.fontFamily,
    textAlign: 'center',
  },
  txt5: {
    fontSize: 15,
    fontFamily: FontFamily.txt.fontFamily,
    color: 'black',
    margin: 10,
    textAlign: 'center',
    width: Width / 1.6,
  },
  txt6: {
    fontSize: 15,
    fontFamily: FontFamily.txt.fontFamily,
    color: 'rgba(221,133,96, 1)',
    textAlign: 'center',
    width: Width / 1.5,
    marginBottom: 20,
  },
});
