import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Divider from './Head & Foot/divider';
import Header from './Head & Foot/header';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;



export default function Blog() {

  const [save, setsave] = useState(false);

  const filter = ['Fashion', 'Promo', 'Policy', 'Lookbook', 'Sale'];

  const postData = [
    {name:'2021 STYLE GUIDE: The Biggest Fall Trends', tag:['Fashion', 'Tips'], daysAgo: 2, image: require('../Icons/image9.png')},
  ]

  const FilterComponent =({item, index})=>{
    return(
      <View style={{paddingRight:20}}>

      
<FlatList
      data={filter}
      keyExtractor={(index) => index.toString()}
      renderItem={renderItem}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      />
      </View>
    )
  };


  const Post = ()=>{
    return(
      <FlatList
      data={postData}
      keyExtractor={(index) => index.toString()}
      renderItem={({item}) => {
        return(
          <View style={{marginHorizontal: 25}}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.gradient}></LinearGradient>
          
          <TouchableWithoutFeedback onPress={()=>setsave(!save)} >
          <Ionicons
            name={ !save ? "bookmark-outline" : 'bookmark'}
            size={20}
            color={'white'}
            style={styles.bookmarkIcon}
          />

            </TouchableWithoutFeedback>
        <Text style={styles.text}>
          {item.name}
        </Text>
        <View style={styles.tagContainer}>
          {/* <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
            <TouchableWithoutFeedback onPress={()=>console.warn('Fashion')}>
            <Text style={styles.tag}>#Fashion</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>console.warn('Tips')}>
            <Text style={styles.tag}>#Tips</Text>
            </TouchableWithoutFeedback>
          </View> */}
          {item.tag.map((tag, tagIndex) => {
            return(
              <View key={tagIndex}>
                <Text>{tag}</Text>
              </View>
            )
          })}
          <Text style={styles.daysAgoText}>days ago</Text>
        </View>
      </View>
        )
      }}
      />
    )
  }

  const renderItem = ({item, index}) => {
    return(
      <View style={styles.filterstyle}>
        <Text style={styles.filtertext}>{item}</Text>
      </View>
    )
  };

  

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.title}>
        <Text style={{fontSize:20, color:'black'}}>Blog</Text>
        <Divider />
      </View>
      <FilterComponent/>
      <Post/>
      
      <View style={{position:'absolute', bottom:0, left:0, right:0}}>
      

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    width: Width / 1.15,
    height: Height / 4,
    alignSelf: 'center',
    opacity: 0.9,
  },
  gradient: {
    width: Width / 1.15,
    height: Height / 4,
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  bookmarkIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 19,
    bottom: 70,
    left: 15,
  },
  tagContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  tag: {
    borderWidth: 0.2,
    padding: 6,
    borderRadius: 20,
    borderColor: 'grey',
  },
  daysAgoText: {
    marginRight: 20,
  },
  filterstyle: {
    marginLeft:22,
    marginVertical:25,
    paddingVertical:10,
    paddingHorizontal:14,
    backgroundColor:'#F9F9F9',
    borderRadius:18
  }, 
  filtertext: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'TenorSans-Regular',
  },
  
});