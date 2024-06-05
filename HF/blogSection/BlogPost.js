import {Text, 
  View, 
  Image, 
  StyleSheet, 
  Dimensions, 
  FlatList, 
  TouchableWithoutFeedback
} from "react-native";
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import FontFamily from '../Colors/style';
import {useNavigation} from '@react-navigation/native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function BlogPost() {
  const navigation = useNavigation();

  const postData = [
    {
      name: '2021 STYLE GUIDE: The Biggest Fall Trends',
      tag: ['Fashion', 'Tips'],
      daysAgo: 2,
      image: require('../../Icons/Rectangle.png'),
      
    },
    {
      name: '2021 STYLE GUIDE: The Biggest Fall Trends',
      tag: ['Fashion', 'Tips'],
      daysAgo: 2,
      image: require('../../Icons/Rectangle.png'),
      
    },
    {
      name: '2021 STYLE GUIDE: The Biggest Fall Trends',
      tag: ['Fashion', 'Tips'],
      daysAgo: 2,
      image: require('../../Icons/Rectangle.png'),
      
    },
    {
      name: '2021 STYLE GUIDE: The Biggest Fall Trends',
      tag: ['Fashion', 'Tips'],
      daysAgo: 2,
      image: require('../../Icons/Rectangle.png'),
      
    },
    {
      name: '2021 STYLE GUIDE: The Biggest Fall Trends',
      tag: ['Fashion', 'Tips'],
      daysAgo: 2,
      image: require('../../Icons/Rectangle.png'),
      
    },
  ];

  const [save, setsave] = useState(false);

  const handleSave = itemId => {
    setsave(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginHorizontal: 25}}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('BlogPostDetails', {item})}>
          <View>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['transparent', 'black']}
              style={styles.gradient}></LinearGradient>

            <TouchableWithoutFeedback onPress={() => handleSave(index)}>
              <Ionicons
                name={!save[index] ? 'bookmark-outline' : 'bookmark'}
                size={20}
                color={'white'}
                style={styles.bookmarkIcon}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.tagContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            {item.tag.map((tag, tagIndex) => {
              return (
                <View
                  key={tagIndex}
                  style={{flexDirection: 'row', marginRight: 15}}>
                  <Text style={[styles.tag, FontFamily.txt]}>#{tag}</Text>
                </View>
              );
            })}
          </View>
          <Text style={[styles.daysAgoText, FontFamily.txt]}>days ago</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        keyExtractor={(item, index) => item.name + index.toString()}
        renderItem={renderItem}
      />
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
    bottom: 20,
    left: 15,
  },
  tagContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginHorizontal: 5,
    marginTop: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  tag: {
    borderWidth: 0.2,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: 'grey',
    color: 'grey',
    fontFamily: 'TenorSans-Regular',
    fontSize: 12,
  },
  daysAgoText: {
    marginRight: 5,
    color: 'grey',
    fontFamily: 'TenorSans-Regular',
    fontSize: 12,
  },
  
});
