import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';


const {width, height} = Dimensions.get('screen');

export default function BannerSlider({images}) {
  const [slideNo, setSlideNo] = useState(0);

  const Loading = () => {
    <ActivityIndicator />;
  };

  
  const onMomentumScrollEnd = (event) => {
    const newSlideNo = Math.round(event.nativeEvent.contentOffset.x / width);
    setSlideNo(newSlideNo);
    console.log('slide............................', newSlideNo);
  };
  
  const test1 = Array.isArray(images) && images.length > 0 ? images[0] : null;
  if (!test1 || !Array.isArray(test1.banner)) {
    return (
      <View>
        <Text>No images available</Text>
      </View>
    );
  }
  return (
    <View>
      <View style={{flexDirection: 'row', height: height / 1.39, width: width}}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onMomentumScrollEnd}
          >
          {test1.banner.map((item, index) => {
            // setSlideNo(index);
            return (
              <Image
                key={index}
                source={{uri: item}}
                style={{
                  width: width, 
                  height: height / 1.39, 
                }}
                resizeMode="cover" 
              />
            );
          })}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: height / 1.5,
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 30,
          alignSelf: 'center',
          opacity: 0.6,
        }}>
          
        {test1.banner.map((_, index) => {
          return (
            <View
              key={index}
              style={{
                height: 10,
                width: 10,
                backgroundColor: slideNo === index ? 'white' : null,
                transform: [{rotate: '45 deg'}],
                borderColor: 'white',
                borderWidth: 1,
                marginHorizontal: 10,
              }}></View>
          );
        })}
      </View>
    </View>
  );
}
