import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ImageSource from '../../../assets';

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    marginRight: 30,
    marginTop: 19,
    height: 216,
    // height: 400,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(50, 132, 229, 0.16)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    padding: 30,
    position: 'relative',
    // elevation: 1,
    elevation: 0.4,
    // bottomElevation:4,
    // borderBottomWidth: 0.2,
    // borderTopWidth: 0.2,
    // borderColor: '#000',
  },
  headerText: {
    fontFamily: 'SFCompactDisplay-Semibold',
    fontSize: 16,
    lineHeight: 19,
    color: '#000000',
  },
  backgroundImage: {
    height: 163,
    position: 'absolute',
    right: 0,
    top: 30,
  },
});

const LargeBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Evening Mode ON</Text>
      <Image
        source={ImageSource.lightIcon}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
    </View>
  );
};

export default LargeBanner;
