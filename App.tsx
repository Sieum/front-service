import {NavigationContainer} from "@react-navigation/native";
import Navigation from "~nav/Navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "react-native";
import React from "react";
function App() {
  return (
      <SafeAreaProvider>
          <StatusBar hidden={true} />
          <NavigationContainer>
            <Navigation/>
          </NavigationContainer>
      </SafeAreaProvider>
  );

}

export default App;
