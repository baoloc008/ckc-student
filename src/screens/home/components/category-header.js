import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginLeft: 40,
    marginRight: 30,
  },
  headerText: {
    fontFamily: 'SFCompactDisplay-Semibold',
    fontSize: 16,
    lineHeight: 19,
  },
  headerRightText: {
    color: '#1a8dff',
  },
});

const CategoryHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Running Appliances</Text>
      <Text style={[styles.headerText, styles.headerRightText]}>See All</Text>
    </View>
  );
};

export default CategoryHeader;
