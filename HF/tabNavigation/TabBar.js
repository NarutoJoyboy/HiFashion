import {
  View,
  Text,
  SectionList,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  
} from 'react-native';
import React from 'react';

export default function TabBar() {
  const {Width, Height} = Dimensions.get('screen');

  const tabs = [{title: 'WOMEN'}, {title: 'MEN'}, {title: 'KIDS'}];

  const Divider = () => {
    return(
      <View style={styles.container}>
      <View style={styles.divider}>
        <View style={styles.dividerline} />
        <View style={styles.dividerbox} />
        <View style={styles.dividerline} />
      </View>
    </View>
    )
  }

  const WomenType = () => {
    return (
      <View>
        <Text>Women</Text>
      </View>
    );
  };

  const ManType = () => {
    return (
      <View>
        <Text>Women</Text>
      </View>
    );
  };

  const KidsType = () => {
    return (
      <View>
        <Text>Women</Text>
      </View>
    );
  };

  return (
    <View>
      <Animated.FlatList
        data={[1,2,3]}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        renderItem={({item}) => {
          return (
            <View style={{width: Width, height: Height}}>
              <Image
                source={require('../../Icons/image10.png')}
              />
              {/* <View style={[StyleSheet.absoluteFillObject]}></View> */}
              
            </View>
          );
        }}
      />
      <View style={{flexDirection:'row', position:'absolute', top:20,}}>
        {tabs.map((item, index) => {
          return(
            <View key={index} style={{marginSt:4, marginRight:10}}>
              <Text style={{fontSize:18, color:'black', fontFamily:'TenorSans-Regular', textAlign:'center'}}>{item.title}</Text>
              <Divider/>
            </View>
          )
        })}
      </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerline: {
    borderBottomWidth: 0.2,
    width: 40,
    borderColor: '#DD8560',
  },
  dividerbox: {
    borderWidth: 0.5,
    width: 7,
    height: 7,
    transform: [{rotate: '45deg'}],
    margin: 1,
    borderColor: '#DD8560',
    backgroundColor:'DD8560'
  },
});
