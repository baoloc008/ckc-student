import React from 'react';
import {Platform, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

import {HomeScreen, WebViewScreen} from './screens';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        backgroundColor={'red'}
        barStyle="dark-content"
      />
      <Stack.Navigator>
        <Stack.Screen
          name="homescreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
