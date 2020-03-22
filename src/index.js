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
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <Stack.Navigator
        initialRouteName="screena"
        screenOptions={{
          headerBackground: () => (
            <LinearGradient
              colors={['#2F80ED', '#56CCF2']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linearGradient}
            />
          ),
          headerTitleStyle: {
            color: 'white',
          },
        }}>
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
              width: '65%',
              alignItems: Platform.OS === 'ios' ? 'center' : 'flex-start',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
