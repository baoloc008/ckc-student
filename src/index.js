import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ScreenA, ScreenB} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screena">
        <Stack.Screen
          name="screena"
          component={ScreenA}
          options={{title: 'Screen A Title'}}
        />
        <Stack.Screen
          name="screenb"
          component={ScreenB}
          options={{title: 'Screen B Title', headerBackTitle: 'Trở về'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
