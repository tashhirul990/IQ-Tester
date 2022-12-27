import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import { darkGreen } from "./Constants";
import { AsyncStorage } from "react-native";

const Home = (props) => {
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        props.navigation.navigate("LandingPage");
        console.log(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

   retrieveData();
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 64 }}>Let's start</Text>
        <Text style={{ color: "white", fontSize: 64, marginBottom: 40 }}>
          The test
        </Text>
        <Btn
          bgColor={darkGreen}
          textColor="white"
          btnLabel="Login"
          press={() => props.navigation.navigate("Login")}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          press={() => props.navigation.navigate("Signup")}
        />
      </View>
    </Background>
  );
};

export default Home;
