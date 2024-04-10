import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../Head & Foot/header'

export default function BlogPostDetails({route}) {

  const {item}= route.params;
  return (
    <View>
      <Header/>
        <Image source={item.image} style={{width: '100%', height: 200}}/>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.tag}</Text>
        <Text>{item.daysAgo}</Text>
      </View>
    </View>
  )
}