import React from 'react';
import {View, Text} from 'react-native';

const OAuthCallbackHandler = (props: any) => {
  console.log('props.route.params', props.route.params);
  return (
    <View>
      <Text>OAuthCallbackHandler</Text>
    </View>
  );
};

export default OAuthCallbackHandler;
