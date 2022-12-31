import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import TestPage from "./components/TestPage";
import { View } from "react-native";
import FlashMessage from "react-native-flash-message";
import QuestionPage from "./components/QuestionPage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="TestPage" component={TestPage} />
          <Stack.Screen name="QuestionPage" component={QuestionPage} />
        </Stack.Navigator>
      </NavigationContainer>

      <FlashMessage position="top" />
    </View>
  );
}

export default App;
