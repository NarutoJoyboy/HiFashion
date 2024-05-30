import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon, {IconSets} from "../ImpComponent/Icons";

const IconButton = ({ fontType, name, size, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <fontType />
    </TouchableOpacity>
  );
};

export default IconButton;
