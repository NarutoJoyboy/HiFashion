import { View, Text, FlatList, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('screen')
export default function Collectiontabs() {

    const tabs = [
        {name:'All', id:1},
        {name:'Apparel', id:2},
        {name:'Dress', id:3},
        {name:'Tshirt', id:4},
        {name:'Bag', id:5},
    ]

    



  return (
    <View style={{  width, position:'relative', }}>
        <View style={{justifyContent:'space-evenly',flexDirection:'row' }}>

            {tabs.map((item)=>{
                return(
                    <TouchableWithoutFeedback onPress={()=>console.warn('my name is Peem')} key={item.id}>

                <Text style={{color:'black', fontSize:18}}>{item.name}</Text>
            </TouchableWithoutFeedback>
                )
            })}
            </View>
    </View>
  )
}