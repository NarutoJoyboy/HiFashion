import { View, Text } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import All from '../CollectionsTopTabs/All';

export default function collectiontabs() {

    const Tabs = createMaterialTopTabNavigator();

  return (
    <Tabs.Navigator>
        <Tabs.Screen name='All' component={All}/>
        <Tabs.Screen name='Apparel' component={All}/>
        <Tabs.Screen name='Dress' component={All}/>
        <Tabs.Screen name='Tshirt' component={All}/>
        <Tabs.Screen name='Bag' component={All}/>
    </Tabs.Navigator>
  )
}