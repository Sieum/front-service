import React from 'react';
import {WebView} from 'react-native-webview';
import Config from 'react-native-config';

const LoginWebView = () => {
  return (
    <WebView
      source={{
        uri: `${Config.API_BASE_URL}/oauth2/login`,
      }}
      javaScriptEnabled={true}
    />
  );
};

export default LoginWebView;
