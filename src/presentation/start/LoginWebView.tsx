import React from 'react';
import {WebView} from 'react-native-webview';

const LoginWebView = () => {
  return (
    <WebView
      source={{
        uri: `http://70.12.114.93:8080/oauth2/authorization/spotify`,
      }}
      javaScriptEnabled={true}
    />
  );
};

export default LoginWebView;
