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
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Divider from './Head & Foot/divider';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Header from './Head & Foot/header';

export default function Home({ navigation }) {
  const Width = Dimensions.get('window').width;
  const Height = Dimensions.get('window').height;

  const list1 = [
    { name: 'About', id: 1, onPress: 'ABout' },
    { name: 'Contact', id: 2, onPress: 'Contact' },
    { name: 'Blog', id: 3, onPress: 'Blog' },
  ];

  const Brnds = [
    { name: 'PRADA', id: 1 },
    { name: 'BURBERRY', id: 2 },
    { name: 'BOSS', id: 3 },
    { name: 'Cartier', id: 4 },
    { name: 'GUCCI', id: 5 },
    { name: 'TIFFANT & CO.', id: 6 },
  ];

  const ShippingDetails = [
    {
      img: require('../Icons/sticker1.png'),
      name: 'Fast shipping Free on order above $25',
      id: 1,
    },
    {
      img: require('../Icons/sticker2.png'),
      name: 'Sustainable process from start to finish',
      id: 2,
    },
    {
      img: require('../Icons/sticker3.png'),
      name: 'Unique designs and high quality materials',
      id: 3,
    },
    {
      img: require('../Icons/sticker4.png'),
      name: 'Giving priority to customers by taking reviews',
      id: 4,
    },
  ];
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Header />
        <View>
          <Image source={require('../Icons/image10.png')} style={{ width: Width }} />
          <View style={{ position: 'absolute', top: Height / 2.5, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
            <Text style={[styles.txt1, ]}>LUXURY</Text>
            <Text style={styles.txt1}>FASHION</Text>
            <Text style={styles.txt1}>ACCESSORIES</Text>
          </View>
          <View style={{ position: 'absolute', top: Height / 1.6, alignSelf: 'center' }}>
            <TouchableOpacity style={styles.explorebut}>
              <Text style={styles.explorebutstyle}>EXPLORE COLLECTION</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignSelf: 'center', alignItems: 'center', marginVertical: 15 }}>
          <Text style={styles.txt2}>NEW ARRIVAL</Text>
          <Divider />
        </View>
        <View style={{ flex: 1, height: Height }}>
          {/* <Collectiontabs /> */}
        </View>
        <View style={{ alignSelf: 'center', justifyContent:'center', alignContent:'center' }}>
          <TouchableWithoutFeedback >
            <View style={{ marginBottom: 20, flexDirection:'row', alignItems:'center', justifyContent:'center', alignContent:'center' }}>
            <Text style={styles.txt3}>EXPLORE MORE</Text>
            {/* <Image source={require('../Icons/ForwardArrow.png')}/> */}
            <AntDesign name='arrowright' size={20} color={'black'}/>
            </View>
          </TouchableWithoutFeedback>
          <Divider /> 
        </View>

        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
          {Brnds.map(item => {
            return (
              <Text key={item.id} style={{ fontSize: 20, padding: 20, color:'black', }}>
                {item.name}
              </Text>
            );
          })}
          <Divider />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.txt4}>COLLECTIONS</Text>
          <Image source={require('../Icons/Frame2.png')} style={{ width: Width }} />
          <Image source={require('../Icons/image9.png')} style={styles.collectionImage} />
          <Image source={require('../Icons/Video.png')} style={styles.videoImage} />
        </View>
        <View>
          <Text>Just for you</Text>
          <Divider />
          <Image source={require('../Icons/Frame2.png')} style={{ width: 200, height: 400 }} />
        </View>

        <View style={styles.classyStoreContainer}>
          <Text>Classy Store</Text>
          <Text style={styles.classyStoreText}>
            Making a luxurious lifestyle accessible for a generous group of women is our daily drive
          </Text>
          <Divider />
          <View style={styles.shippingDetailsContainer}>
            {/* Shipping Details */}
          </View>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.socialMediaContainer}>
            <TouchableWithoutFeedback>
              <AntDesign name="twitter" size={24} color="black" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <AntDesign name="instagram" size={24} color="black" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <AntDesign name="youtube" size={24} color="black" />
            </TouchableWithoutFeedback>
          </View>
          <Divider />
          
          <View style={styles.contactContainer}>
            <TouchableWithoutFeedback>
              <Text>supportt@classystore</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text>+121234567896</Text>
            </TouchableWithoutFeedback>
            <Text>08:00 - 22:00 - Everyday</Text>
          </View>
          <Divider />
          <View style={styles.navigationContainer}>
            {list1.map((item) => {
              return(
                <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.onPress)} style={styles.navigationItem}>
                  <Text style={styles.navigationItemText}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Text Styles
  container:{
    flex: 1, 
    backgroundColor: 'white'
  },
  txt1: {
    fontSize: 45,
    color: 'white',
    fontFamily: 'TenorSans-Regular',
  },
  txt2: {
    fontSize: 20,
    alignItems: 'center',
    fontFamily: 'TenorSans-Regular',
    color: 'black',
  },
  txt3: {
    fontSize: 17,
    alignItems: 'center',
    fontFamily: 'TenorSans-Regular',
    color: 'black',
    paddingRight:10
  },
  txt4: {
    fontSize: 24,
    fontFamily: 'TenorSans-Regular',
    marginVertical: 20,
  },
  classyStoreText: {
    fontSize: 16,
  },
  navigationItemText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'TenorSans-Regular',
  },

  // Image Styles
  collectionImage: {
    width: 200,
  },
  videoImage: {
    width: '100%',
    height: 400,
  },

  // Container Styles
  classyStoreContainer: {
    backgroundColor: 'rgba(221,133,96, 0.5)',
    alignItems: 'center',
    padding: 10,
  },
  shippingDetailsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerContainer: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  contactContainer: {
    alignItems: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  navigationItem: {
    marginHorizontal: 20,
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
    fontFamily: 'TenorSans-Regular',
    textAlign: 'center',
  },
});

