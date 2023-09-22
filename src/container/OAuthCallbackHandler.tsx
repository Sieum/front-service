import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';
import {useSetRecoilState} from 'recoil';
import {AccessTokenAtom, RefreshTokenAtom} from '~recoil/TokenAtom';

const OAuthCallbackHandler = ({route}) => {
  const [accessToken, setAccessToken] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');
  const setAccessTokenAtom = useSetRecoilState(AccessTokenAtom);
  const setRefreshTokenAtom = useSetRecoilState(RefreshTokenAtom);

  // DeepLink URL에서 access/refreshToken 추출
  useEffect(() => {
    setAccessToken(route.params.accessToken);
    setRefreshToken(route.params.refreshToken);
  }, []);

  // 추출한 access/refreshToken을 SecureStore 및 Atom 전역 state에 저장
  useEffect(() => {
    if (accessToken && refreshToken) {
      saveTokenToSecureStore('accessToken', accessToken).then(() => {
        setAccessTokenAtom(accessToken);
      });
      saveTokenToSecureStore('refreshToken', refreshToken).then(() => {
        setRefreshTokenAtom(refreshToken);
      });
    }
  }, [accessToken, refreshToken]);

  const saveTokenToSecureStore = async (type: string, token: string) => {
    await RNSecureStorage.set(type, token, {
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
    });
  };

  return (
    <View>
      <Text>OAuthCallbackHandler</Text>
    </View>
  );
};

export default OAuthCallbackHandler;
