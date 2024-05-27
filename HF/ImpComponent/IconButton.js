import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon, {IconSets} from './Icons';

export default function IconButton({ fontType, name, size, color, onPress }) {
  return (
    <TouchableOpacity onPress={console.log('Prem')} activeOpacity={0.6}>
        <Icon iconSet={fontType} name={name} size={size} color={color}></Icon>
    </TouchableOpacity>
  )
}