import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationTabBar from '~nav/NavigationTabBar';
import Stack from '~nav/Stack';
import MyProfile from 'src/presentation/profile/MyProfile';

const Nav = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
      }}>
      <Nav.Screen name="MyProfile" component={MyProfile} />
      <Nav.Screen name="Stack" component={Stack} />
      <Nav.Screen name="NavigationTabBar" component={NavigationTabBar} />
    </Nav.Navigator>
  );
};
export default Navigation;
