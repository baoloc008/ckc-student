import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, WebViewScreen} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screena">
        <Stack.Screen
          name="homescreen"
          component={HomeScreen}
          options={{title: 'CKC Student'}}
        />
        <Stack.Screen
          name="webviewscreen"
          component={WebViewScreen}
          options={{
            title: 'Trường Cao Đẳng Kỹ Thuật Cao Thắng',
            headerBackTitleVisible: false,
            headerTitleAllowFontScaling: false,
            headerTitleContainerStyle: {
              width: '75%',
              alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
