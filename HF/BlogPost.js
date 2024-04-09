import { View, Text, TouchableWithoutFeedback, Image, FlatList, StyleSheet, Dimensions } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function BlogPost() {

    const postData = [
        {name:'2021 STYLE GUIDE: The Biggest Fall Trends', tag:['Fashion', 'Tips'], daysAgo: 2, image: require('../Icons/image9.png')},
        {name:'2021 STYLE GUIDE: The Biggest Fall Trends', tag:['Fashion', 'Tips'], daysAgo: 2, image: require('../Icons/image9.png')},
        {name:'2021 STYLE GUIDE: The Biggest Fall Trends', tag:['Fashion', 'Tips'], daysAgo: 2, image: require('../Icons/image9.png')},
        {name:'2021 STYLE GUIDE: The Biggest Fall Trends', tag:['Fashion', 'Tips'], daysAgo: 2, image: require('../Icons/image9.png')},
        {name:'2021 STYLE GUIDE: The Biggest Fall Trends', tag:['Fashion', 'Tips'], daysAgo: 2, image: require('../Icons/image9.png')},
      ];

      const [save, setsave] = useState(false);

      
  return (
   <View>

   
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
      <TouchableOpacity style={{bottom: 0, left: 0, right: 0, flexDirection:'row', justifyContent:'center', borderWidth:1, padding:15}}>
          <Text>Load More</Text>
          <Ionicons name="add-sharp" size={25} color={'black'} />
        </TouchableOpacity>
       </View>
  )
}



const styles = StyleSheet.create({
    
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

});