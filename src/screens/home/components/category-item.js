import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 135,
    height: 153,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(50, 132, 229, 0.16)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    paddingVertical: 20,
    paddingLeft: 15,
    marginRight: 30,
    paddingRight: 20,
    shadowRadius: 16,
    shadowOpacity: 1,
    elevation: 0.4,
    marginVertical: 20,
  },
  itemText: {
    marginTop: 18,
    fontFamily: 'SFCompactDisplay-Semibold',
    fontSize: 12,
    lineHeight: 14,
    color: '#090d17',
  },
});

const CategoryItem = props => {
  const {icon, text} = props;
  return (
    <View style={styles.container}>
      <Image source={icon} resizeMode="contain" />
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
};

export default CategoryItem;
