import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://caothang.edu.vn/'}}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        )}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
        }}
      />
    );
  }
}

export default MyWeb;
