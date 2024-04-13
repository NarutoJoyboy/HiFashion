import { View, Text, Modal } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from './Home';


export default function Menu() {

    const Bottom = createBottomTabNavigator();
const navigation = useNavigation();
return(
    <Modal >
        <Bottom.Navigator>
            <Bottom.Screen name='Home' component={Home}/>
        </Bottom.Navigator>
    </Modal>
)
}