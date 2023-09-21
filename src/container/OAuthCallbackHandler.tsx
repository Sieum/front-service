import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

const OAuthCallbackHandler = ({route}) => {
  const [accessToken, setAccessToken] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');

  useEffect(() => {
    setAccessToken(route.params.accessToken);
    setRefreshToken(route.params.refreshToken);
  }, []);

  useEffect(() => {
    if (accessToken && refreshToken) {
      saveTokenToSecureStore('accessToken', accessToken);
      saveTokenToSecureStore('refreshToken', refreshToken);
    }
  }, [accessToken, refreshToken]);

  const saveTokenToSecureStore = (type: string, token: string) => {
    RNSecureStorage.set(type, token, {
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
    }).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  };

  return (
    <View>
      <Text>OAuthCallbackHandler</Text>
    </View>
  );
};

export default OAuthCallbackHandler;
