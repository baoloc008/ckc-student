import React, {useState, useRef, useLayoutEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useEventListener} from '../hooks';

const styles = StyleSheet.create({
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webViewStyle: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});

const WebViewScreen = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const {uri} = route.params;

  const webViewRef = useRef(null);
  const [canWebGoBack, setCanWebGoBack] = useState(false);
  const handleWebViewNavigationStateChange = newNavState => {
    const {canGoBack} = newNavState;
    setCanWebGoBack(canGoBack);
  };

  const handleOnBackPress = () => {
    if (canWebGoBack) {
      webViewRef && webViewRef.current.goBack();
    } else {
      navigation.goBack();
    }
    return true;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerLeft: () => <Text onPress={handleOnBackPress}>Back</Text>,
      headerLeft: () => (
        <Icon
          name={'arrow-back'}
          size={30}
          color="white"
          onPress={handleOnBackPress}
        />
      ),
    });
  });

  useEventListener(BackHandler, 'hardwareBackPress', handleOnBackPress);

  return (
    <WebView
      source={{uri}}
      startInLoadingState={true}
      renderLoading={() => (
        <ActivityIndicator size="large" style={styles.indicatorStyle} />
      )}
      style={styles.webViewStyle}
      ref={webViewRef}
      onNavigationStateChange={handleWebViewNavigationStateChange}
    />
  );
};

export default WebViewScreen;
