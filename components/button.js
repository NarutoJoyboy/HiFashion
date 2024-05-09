import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function button({styles}) {
  return (
    <View>
     {/* <Button title="Click me" onPress={() => alert('Button Clicked')} /> */}
     <TouchableOpacity style={styles}>
        <Text>Prem</Text>
     </TouchableOpacity>
    </View>
  )
}
