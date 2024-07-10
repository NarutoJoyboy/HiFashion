import {View, Text, Modal, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import TabBar from '../tabNavigation/TabBar';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SvgIcons from '../../Icons/SvgIcons';

export default function Menu() {

    // const [isVisble, setIsVisible] = useState(false);
    const navigation = useNavigation();
  return (
    <Modal >
      <View style={{marginTop:20, backgroundColor:'white', flex:1, marginLeft:20}}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
          >
          <SvgIcons name={'Close'} width={25} height={25}/>
        </TouchableOpacity>
        <TabBar />
      </View>
      </Modal>
    
  );
}
