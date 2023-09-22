import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationTabBar from '~nav/NavigationTabBar';
import Stack from '~nav/Stack';
import RNSecureStorage from 'rn-secure-storage';
import OAuthCallbackHandler from '../container/OAuthCallbackHandler';
import LoginWebView from '../presentation/start/LoginWebView';
import LoginContainer from '../container/login/LoginContainer';
import {useRecoilState} from 'recoil';
import {AccessTokenAtom} from '~recoil/TokenAtom';

const Nav = createNativeStackNavigator();

const Navigation = () => {
  const [userToken, setUserToken] = useRecoilState(AccessTokenAtom);
  useEffect(() => {
    RNSecureStorage.get('accessToken')
      .then(token => {
        if (token) {
          setUserToken(token);
        }
      })
      .catch(err => {
        console.log(
          'SecureStore에서 토큰을 가져오는 중 오류가 발생했습니다. : ',
          err,
        );
      });
  }, []);
  return (
    <Nav.Navigator
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
      }}>
      {userToken ? (
        <>
          <Nav.Screen name="NavigationTabBar" component={NavigationTabBar} />
          <Nav.Screen name="Stack" component={Stack} />
        </>
      ) : (
        <>
          <Nav.Screen name="LoginContainer" component={LoginContainer} />
          <Nav.Screen name="LoginWebView" component={LoginWebView} />
          <Nav.Screen
            name="OAuthCallbackHandler"
            component={OAuthCallbackHandler}
          />
        </>
      )}
    </Nav.Navigator>
  );
};
export default Navigation;
