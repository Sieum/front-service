import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FriendList from "~screens/FriendList/FriendList";
import Community from "~screens/Community/Community";
import Home from '~screens/Home/Home'
import PlayList from "~screens/PlayList/PlayList";
import MyProfile from "~screens/Profile/MyProfile";

const Tab = createBottomTabNavigator();

const NaigationTabBar = () => {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            backBehavior="history"
            screenOptions={({route}) => ({
                tabBarShowLabel: false,
                headerShown: false,

                tabBarStyle: {
                    borderRadius: 10,
                    backgroundColor: 'white',
                },

                tabBarActiveTintColor: '#FDE68A',
                tabBarInactiveTintColor: '#71717A',

                tabBarItemStyle: {
                    bottom: 25,
                    height: 100,
                    padding: 15,
                },

                tabBarIcon: ({focused, color}) => {
                    let iconName: string = "";
                    let rn = route.name;


                    if (rn === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === 'Community') {
                        iconName = focused ? 'earth' : 'earth-outline';
                    } else if (rn === 'PlayList') {
                        iconName = focused ? 'folder-open' : 'folder-open-outline';
                    } else if (rn === 'FriendList') {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (rn === 'MyProfile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={35} color={color} />;
                },
            })}>
            <Tab.Screen name="FriendList" component={FriendList} />
            <Tab.Screen name="Community" component={Community} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="PlayList" component={PlayList} />
            <Tab.Screen name="MyProfile" component={MyProfile} />
        </Tab.Navigator>
    )
}
export default NaigationTabBar;
