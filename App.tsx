import {NavigationContainer, PathConfigMap} from '@react-navigation/native';
import Navigation from '~nav/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Linking, StatusBar} from 'react-native';
import React from 'react';
import {RecoilRoot} from 'recoil';

function App() {
  const config: {screens: PathConfigMap<object>} = {
    screens: {
      OAuthCallbackHandler: 'oauth/callback',
    },
  };
  const linking = {
    prefixes: ['sieum://'],
    config,
    subscribe(listener: (url: string) => void) {
      const onReceiveURL = ({url}: {url: string}) => {
        console.log('url : ' + url);
        return listener(url);
      };

      Linking.addEventListener('url', onReceiveURL);
    },
  };
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <StatusBar hidden={true} />
        <NavigationContainer linking={linking}>
          <Navigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </RecoilRoot>
  );
}

export default App;
