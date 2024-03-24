import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Actions} from "react-native-router-flux"

export default function Bag() {
  return (
    <View style={{flex:1}}>
      <TouchableOpacity style={{borderWidth:1, }} onPress={()=>Actions.Dress()}>
        <Text>Next Screen</Text>
      </TouchableOpacity>
    </View>
  )
}