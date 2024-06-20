import {View, Text} from 'react-native';
import React, {useState} from 'react';

export default function AppSlider({images}) {
  const [slideNo, setSlideNo] = useState(0);

  return (
    <View>
      <View>
        {images.banner.map((item, index) => {
          return (
            <View key={index}>
              {item}
            </View>
          );
        })}
      </View>
      <View>
        {images.length.map((item, index) => {
          return (
            <View key={index}>
              <View style={{borderWidth: 1,
                 padding: 5,
                 transform:[{rotate:slideNo===index? '0deg':'-90deg'}]
                 
                 }}></View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
