import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Divider from './Head & Foot/divider';
import FontFamily from './Colors/style';
import Antdesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const navigation = useNavigation();

  const Header = () => {
    return (
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.6}>
            <Antdesign name="arrowleft" size={25} color={'black'} />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: width / 4, marginVertical: 10}}>
          <Text
            style={[
              FontFamily.txt,
              {
                fontSize: 20,
                color: 'black',
                textAlign: 'center',
                letterSpacing: 5,
              },
            ]}>
            CART
          </Text>
          <Divider />
        </View>
      </View>
    );
  };

  const Footer = () => {
    return (
      <TouchableOpacity
        style={styles.checkOutButton}
        activeOpacity={0.5}
        onPress={() => console.warn("let's Checkout")}>
        <SimpleLineIcons name="handbag" size={22} color="white" />
        {cartData.length === 0 ? (
          <Text style={styles.carttxt}>CONTINUE SHOPPING</Text>
        ) : (
          <Text style={styles.carttxt}>BUY NOW</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      {cartData.length === 0 ? (
        <View style={[styles.title, {marginVertical: height / 2.8}]}>
          <Text style={[FontFamily.txt, {fontSize: 20, color: 'black'}]}>
            Your Cart is Empty
          </Text>
        </View>
      ) : (
        <FlatList
          data={cartData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          }}
          ListFooterComponent={
            <View style={styles.priceTotal}>
              <View style={styles.divider} />
              <View>
                <Text>SUB TOTAL</Text>
                <Text>$240</Text>
              </View>
              <Text>
                *shipping charges, taxes and discount codes are calculated at
                the time of accounting.
              </Text>
            </View>
          }
        />
      )}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkOutButton: {
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carttxt: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingLeft: 20,
    letterSpacing: 2,
  },
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  priceTotal: {
    margin: 10,
  },
});
