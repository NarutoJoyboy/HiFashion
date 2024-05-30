import React from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export const IconSets = {
  Entypo: IconEntypo,
  EvilIcons: IconEvilIcons,
  Feather: IconFeather,
  FontAwesome: IconFontAwesome,
  FontAwesome5: IconFontAwesome5,
  Foundation: IconFoundation,
  Ionicons: IconIonicons,
  MaterialIcons: IconMaterialIcons,
  MaterialCommunityIcons: IconMaterialCommunityIcons,
  Octicons: IconOcticons,
  Zocial: IconZocial,
  SimpleLineIcons: IconSimpleLineIcons,
  AntDesign: IconAntDesign,
};

const Icon = ({ iconSet, name, size, color }) => {
  const SelectedIcon = IconSets[iconSet];
  return <SelectedIcon name={name} size={size} color={color} />;
};

export default Icon;
