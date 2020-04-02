import React from 'react';
import {Text, StyleSheet, View, StatusBar} from 'react-native';
import {
  HomeHeader,
  LargeBanner,
  CategoryHeader,
  CategoryList,
} from './components';

StatusBar.setHidden(true);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FC',
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <LargeBanner />
      <CategoryHeader />
      <CategoryList />
    </View>
  );
};

export default HomeScreen;
