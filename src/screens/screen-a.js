import React from 'react';
import {Text, View, Button} from 'react-native';

const ScreenA = props => {
  const {navigation} = props;
  const handleNavigateToScreenB = () => {
    navigation.push('screenb');
  };
  return (
    <View>
      <Text>Screen A</Text>
      <Button title="Go To Screen B" onPress={handleNavigateToScreenB} />
    </View>
  );
};

export default ScreenA;
