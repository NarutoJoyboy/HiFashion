import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView} from "react-native"
import React from 'react';
import Collectiontabs from './collectiontabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useNavigation from '@react-navigation/native';


export default function Home({navigation}) {

  

  const Width = Dimensions.get('window').width;
  const Height = Dimensions.get('window').height;

  const list1=[
    {name: 'About', id: 1, onPress: ()=> console.log('ABout')},
    {name: 'Contact', id: 2, onPress: ()=> console.log('Contact')},
    {name: 'Blog', id: 3, onPress: ()=> navigation.navigate('Blog')},
  ]
  


  const Brnds = [
    {name: 'PRADA', id: 1},
    {name: 'BURBERRY', id: 2},
    {name: 'BOSS', id: 3},
    {name: 'Cartier', id: 4},
    {name: 'GUCCI', id: 5},
    {name: 'TIFFANT & CO.', id: 6},
  ];

  

  const Divider = () => {
    return (
      <View style={styles.divider}>
        <View style={styles.dividerline} />
        <View style={styles.dividerbox} />
        <View style={styles.dividerline} />
      </View>
    );
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View>
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
            <Text style={styles.txt1}>LUXURY</Text>
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
          <Collectiontabs />
        </View>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity style={{alignSelf: 'center', marginBottom: 20}}>
            <Text style={styles.txt3}>EXPLORE MORE</Text>
          </TouchableOpacity>
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
              <Text key={item.id} style={{fontSize: 20, padding: 20}}>
                {item.name}
              </Text>
            );
          })}
          <Divider />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'TenorSans-Regular',
              marginVertical: 20,
            }}>
            COLLECTIONS
          </Text>
          <Image
            source={require('../Icons/Frame2.png')}
            style={{width: Width}}
          />
          <Image source={require('../Icons/image9.png')} style={{width: 200}} />
          <Image
            source={require('../Icons/Video.png')}
            style={{width: Width, height: 400}}
          />
        </View>
        <View>
          <Text>Just for you</Text>
          <Divider />
          <Image
            source={require('../Icons/Frame2.png')}
            style={{width: 200, height: 400}}
          />
        </View>

        <View
          style={{
            backgroundColor: 'rgba(221,133,96, 0.5)',
            alignItems: 'center',
          }}>
          <View>
            <Text>Classy Store</Text>
          </View>
          <Text>
            Making a luxurious lifestyle accessible for a generous group of
            women is our daily drive
          </Text>
          <Divider />
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {ShippingDetails.map(item => {
              return (
                <View
                  key={item.id}
                  style={{alignItems: 'center', margin: 10, width: 150}}>
                  <Image source={item.img} style={{width: 30, height: 30}} />
                  <Text style={{textAlign: 'center'}}>{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={{alignSelf:'center', marginVertical:10}}>
          <View style={{flexDirection:'row', justifyContent:"space-between", marginBottom:10}}>
            <AntDesign name="twitter" size={24} color="black" />
            <AntDesign name="instagram" size={24} color="black" />
            <AntDesign name="youtube" size={24} color="black" />
          </View>
          <Divider />
        </View>
        <View style={{alignSelf:'center', alignItems:'center'}}>
          <TouchableOpacity>
            <Text>supportt@classystore</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>+121234567896</Text>
          </TouchableOpacity>
          
          <Text>08:00 - 22:00 - Everyday</Text>
        <Divider />
        </View>
        <View style={{flexDirection:'row', alignSelf:'center', justifyContent:'space-between', marginBottom:30}}>
          {list1.map((item) => {
            return(
              <TouchableOpacity key={item.id} onPress={item.onPress} style={{marginHorizontal:20}}>
                <Text style={{fontSize:18, color:'black', fontFamily:'TenorSans-Regular'}}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerline: {
    borderBottomWidth: 0.2,
    width: 60,
    borderColor: 'grey',
  },
  dividerbox: {
    borderWidth: 0.5,
    width: 7,
    height: 7,
    transform: [{rotate: '45deg'}],
    margin: 1,
    borderColor: 'grey',
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
  },
});

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
    name: 'Giving priority to customers by taking reveiws',
    id: 4,
  },
];

