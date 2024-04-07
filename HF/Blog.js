import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons"
import LinearGradient from "react-native-linear-gradient"

// const {Width, Height} = Dimensions.get('screen');
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function Blog() {
  const Divider = () => {
    return (
      <View style={styles.divider}>
        <View style={styles.dividerline} />
        <View style={styles.dividerbox} />
        <View style={styles.dividerline} />
      </View>
    );
  };

  return (
    <View style={{flex:1}}>
      <View style={{alignSelf:'center', alignItems:'center'}}>
        <Text>Blog</Text>
        <Divider />
      </View>
      <View style={{marginHorizontal:25}}>
        <Image
          source={require('../Icons/image9.png')}
          style={{width: Width/1.15, height: Height/4, alignSelf: 'center', opacity:0.9}}
          resizeMode="cover"
        />
        <Ionicons name='bookmark-outline' size={20} color={'white'} style={{position:'absolute', right:10, top:10}}/>
        <Text>Whatever you want.</Text>
        <View style={{justifyContent:'space-between', flexDirection:'row',}}>
          <View style={{justifyContent:'space-between', flexDirection:'row',}}>
        <Text style={{borderWidth:0.2, padding:6, borderRadius:20, borderColor:'grey', marginRight:20}}>#Fashion</Text>
        <Text style={{borderWidth:0.2, padding:6, borderRadius:20, borderColor:'grey',}}>#Tips</Text>
          </View>
          <Text>Days</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerline: {
    borderBottomWidth: 0.2,
    width: 60,
    borderColor: 'grey',
  },
  dividerbox: {
    borderWidth: 0.5,
    width: 7,
    height: 7,
    transform: [{rotate: '45deg'}],
    margin: 1,
    borderColor: 'grey',
  },
});