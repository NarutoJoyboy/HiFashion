import { View, Text, Modal } from 'react-native';
import React from 'react';
import { Category } from '../firebase/System';
import MyTheme from '../Colors/MyTheme';

export default function FilterData() {
  return (
    <Modal>
        <Text style={{color:MyTheme.colors.txtColor, fontSize:25, textAlign:'center'}}>Filter</Text>
        <View>
            <Text>Category</Text>
            <View>
                <Text>{}</Text>
            </View>
        </View>
    </Modal>
  )
}