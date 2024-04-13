import { View, Text, Modal } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Menu() {
const navigation = useNavigation();
return(
    <Modal >
        <View>
            <Text>Menu</Text>
        </View>
    </Modal>
)
}