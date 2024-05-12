import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Header from '../Head & Foot/header'

const {width, height} = Dimensions.get('window');

export default function BlogPostDetails({route}) {

  const {item}= route.params;
  return (
    <View>
      <Header/>
        <Image source={item.image} style={{width: width, height: height/3}}/>
      <View>
        <Text style={{color:'black'}}>{item.name}</Text>
        <Text>{item.tag}</Text>
        <Text>{item.daysAgo}</Text>
      </View>
    </View>
  )
}