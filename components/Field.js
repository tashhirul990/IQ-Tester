import { View, Text, TextInput } from "react-native";
import React from "react";
import { darkGreen } from "./Constants";

export default function Field(props) {
  return (
    <View>
      <TextInput
        {...props}
        style={{
          borderRadius: 100,
          color: { darkGreen },
          paddingHorizontal: 10,
          width: 300,
          height: 40,
          backgroundColor: "rgb(220,220, 200)",
          marginVertical: 10,
        }}
        placeholderTextColor={darkGreen}
      ></TextInput>
    </View>
  );
}
