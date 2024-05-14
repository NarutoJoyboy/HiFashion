import {View, Text, TouchableWithoutFeedback, StyleSheet, TouchableOpacity,} from 'react-native';
import React from 'react';
import Divider from './divider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyTheme from '../Colors/MyTheme';
import FontFamily from '../Colors/style';
import { useNavigation } from '@react-navigation/native';

const list1 = [
  {name: 'About', id: 1, onPress: 'ABout'},
  {name: 'Contact', id: 2, onPress: 'Contact'},
  {name: 'Blog', id: 3, onPress: 'Blog'},
];

export const FooterComponent1 = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.socialMediaContainer}>
        <TouchableWithoutFeedback>
          <AntDesign name="twitter" size={24} color="black" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <AntDesign name="instagram" size={24} color="black" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <AntDesign name="youtube" size={24} color="black" />
        </TouchableWithoutFeedback>
      </View>
      <Divider />

      <View style={styles.contactContainer}>
        <TouchableWithoutFeedback>
          <Text style={styles.txt}>supportt@classystore</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={styles.txt}>+121234567896</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.txt}>08:00 - 22:00 - Everyday</Text>
      </View>
    </View>
  );
};

export const FooterComponent2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navigationContainer}>
      {list1.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate(item.onPress)}
            style={styles.navigationItem}>
            <Text style={styles.navigationItemText}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
    footerContainer: {
        alignSelf: 'center',
        marginVertical: 10,
      },
      socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        marginBottom: 20,
      },
      contactContainer: {
        alignItems: 'center',
        marginVertical:20,

      },
      navigationContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop:20,
      },
      navigationItem: {
        marginHorizontal: 20,
      },
      navigationItemText: {
        fontSize: 18,
        color: MyTheme.colors.txtColor,
        fontFamily: FontFamily.txt.fontFamily,
      },
      txt: {
        fontSize: 15,
        fontFamily: FontFamily.txt.fontFamily,
        color: MyTheme.colors.txtColor,
      },
});
