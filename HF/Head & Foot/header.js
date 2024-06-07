import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import React, { useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import TitleImg from '../../Icons/TitleImg';
import { getBrands, getProducts } from '../firebase/System';

const {width, height} = Dimensions.get('screen');

export default function Header({Styles}) {
  const navigation = useNavigation();

  // useEffect(()=>{
  //   console.log("UseEffect Called............................")
  //  const apk = getBrands();
  //  return apk;
  // },[])

  return (
    <View style={[styles.container, {backgroundColor:Styles}]}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <SimpleLineIcons name="menu" size={25} color="black" />
      </TouchableOpacity>
      <View style={{marginLeft: width / 7}}>
        <TitleImg width={width / 5} height={height / 26} />
      </View>
      <View style={styles.rightHead}>
        <TouchableOpacity onPress={()=>getBrands()}>
          <AntDesign
            name="search1"
            size={25}
            s
            color="black"
            style={styles.search}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
          <SimpleLineIcons
            name="handbag"
            size={25}
            color="black"
            style={styles.search}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  rightHead: {
    flexDirection: 'row',
  },
  txt: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'TenorSans-Regular',
  },
  search: {
    marginHorizontal: 10,
  },
});
