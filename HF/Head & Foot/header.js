import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import TitleImg from '../../Icons/TitleImg';
import IconButton from '../ImpComponent/IconButton';
import { IconSets } from '../ImpComponent/Icons';
const {width, height} = Dimensions.get('screen');

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Menu')}>
        {/* <Icon iconSet={IconSets.SimpleLineIcons} name={"menu"} size={25} color={'black'}></Icon> */}
        <IconButton fontType={IconSets.SimpleLineIcons} name={'menu'} size={25} color={'black'}/>
      </TouchableWithoutFeedback>
      <View style={{marginLeft: width / 7}}>
        <TitleImg width={width / 5} height={height / 26} />
      </View>
      <View style={styles.rightHead}>
        <TouchableWithoutFeedback onPress={() => console.warn('Search')}>
          {/* <AntDesign
            name="search1"
            size={25}
            s
            color="black"
            style={styles.search}
          /> */}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Cart')}>
          {/* <SimpleLineIcons
            name="handbag"
            size={25}
            color="black"
            style={styles.search}
          /> */}
        </TouchableWithoutFeedback>
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
    backgroundColor: '#E7EAEF',
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
