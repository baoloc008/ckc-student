import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 30,
  },
  headerText: {
    fontSize: 24,
    lineHeight: 29,
    fontFamily: 'SFCompactDisplay-Bold',
  },
  rightText: {
    color: '#1a8dff',
  },
});

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Good evening!</Text>
      <Text style={[styles.headerText, styles.rightText]}>18h30</Text>
    </View>
  );
};

export default HomeHeader;
