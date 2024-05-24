import {View, Text, Modal, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import TabBar from '../tabNavigation/TabBar';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {

    const [isVisble, setIsVisible] = useState(false);
    const {navigate} = useNavigation();
  return (
      <View style={{marginTop:20, backgroundColor:'white', flex:1}}>
        <TouchableWithoutFeedback 
        onPress={() => navigate('Home')}
          >
          <Feather name="x" color={'black'} size={25}  style={{marginHorizontal:18}}/>
        </TouchableWithoutFeedback>
        <TabBar />
      </View>
    
  );
}
