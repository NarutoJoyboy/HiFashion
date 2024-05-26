import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Divider() {
  return (
    <View style={styles.container}>
      <View style={styles.divider}>
        <View style={styles.dividerline} />
        <View style={styles.dividerbox} />
        <View style={styles.dividerline} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
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
