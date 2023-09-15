import React from 'react';
import { createNativeStackNavigator} from "@react-navigation/native-stack";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
    return(
        <NativeStack.Navigator
            screenOptions={{
                presentation: 'modal',
                headerShown: false,
            }}>
        </NativeStack.Navigator>
    )
}

export default Stack;