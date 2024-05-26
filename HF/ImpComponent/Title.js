import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import MyTheme from '../Colors/MyTheme';
import FontFamily from '../Colors/style';
import Divider from '../Head & Foot/divider';

export function Title({label}) {
    return (
      <View>

      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <Text style={styles.txt2}>{label}</Text>
      </View>
      <Divider />
          </View>
    );
  };


const styles = StyleSheet.create({
    txt2: {
        fontSize: 22,
        alignItems: 'center',
        fontFamily: FontFamily.txt.fontFamily,
        color: MyTheme.colors.txtColor,
        letterSpacing:3
      },
});