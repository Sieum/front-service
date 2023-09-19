import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OAuthCallbackHandler from '~components/OAuthCallbackHandler';

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
      }}>
      <NativeStack.Screen
        name="OAuthCallbackHandler"
        component={OAuthCallbackHandler}
      />
    </NativeStack.Navigator>
  );
};

export default Stack;