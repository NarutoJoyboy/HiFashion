import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import All from './CollectionsTopTabs/All';
import Apparel from './CollectionsTopTabs/Apparel';
import Dress from './CollectionsTopTabs/Dress';
import Tshirt from './CollectionsTopTabs/Tshirt';
import Bag from './CollectionsTopTabs/Bag';

export default function Collectiontabs() {

    const Tab = createMaterialTopTabNavigator();

    const catlist = [
        {item: 'All', id: 1, components: All },
        {item: 'Apparel', id: 2, components: Apparel },
        {item: 'Dress', id: 3, components: Dress },
        {item: 'Tshirt', id: 4, components: Tshirt},
        {item: 'Bag', id: 5, components: Bag},
      ];

  return (
    <Tab.Navigator
    screenOptions={{
        tabBarIndicatorStyle:styles.Indicatorstyle,
        tabBarContentContainerStyle:styles.BarStyle,
        tabBarLabelStyle:styles.labelStyle,
        tabBarStyle:styles.BarStyle1,
        
    }}
    >
        {catlist.map((items, focused)=>{
            return(
                <Tab.Screen name={items.item} component={items.components} key={items.id} 
                options={{
                    // tabBarIndicator:()=>{
                    //     {
                    //         focused ?
                    //         <View style={{borderWidth:1, borderColor:'black'}}/>
                    //         : null
                    //     }
                    // }
                    tabBarIndicatorStyle:()=>{
                        {
                            focused ?
                            {
                            height:8,
                            width:8,
                            transform:[{rotate:'45deg'}],
                            margin:10,
                            backgroundColor:'brown'
                            }
                            : null
                        }
                    }
                }}
                />
                
            )
        })}
        
    </Tab.Navigator>

    
  )
}

const styles = StyleSheet.create({
    Indicatorstyle:{
       
    },
    
    
    
})