import React from 'react';
import {Text, View, Button} from 'react-native';

const HomeScreen = props => {
  const {navigation} = props;
  const handleNavigateToScreenB = () => {
    navigation.push('webviewscreen', {uri: 'http://caothang.edu.vn'});
  };
  return (
    <View>
      <Text>Screen A</Text>
      <Button title="CKC Student" onPress={handleNavigateToScreenB} />
    </View>
  );
};

export default HomeScreen;
