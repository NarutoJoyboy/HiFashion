import { View, Text } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import All from './CollectionsTopTabs/All';
import Apparel from './CollectionsTopTabs/Apparel';
import Dress from './CollectionsTopTabs/Dress';
import Tshirt from './CollectionsTopTabs/Tshirt';
import Bag from './CollectionsTopTabs/Bag';

export default function Collectiontabs() {

    const Tab = createMaterialTopTabNavigator();
    const tabs = [
        {name:'All', component:All, id:1},
        {name:'Apparel', component:Apparel, id:2},
        {name:'Dress', component:Dress, id:3},
        {name:'Tshirt', component:Tshirt, id:4},
        {name:'Bag', component:Bag, id:5},
    ]

  return (
    <Tab.Navigator>
       {
        tabs.map((items, focused)=>{
            return(
                <Tab.Screen name={items.name} component={items.component} key={items.id}
                options={{
                    tabBarContentContainerStyle:{elevation:0}
                }}
                />
            )
        })
       }
        
    </Tab.Navigator>
  )
}