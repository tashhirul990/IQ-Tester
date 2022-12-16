import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn({ bgColor, btnLabel, textColor, press }) {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={press}
        style={{
          backgroundColor: bgColor,
          borderRadius: 100,
          alignItems: "center",
          width: 300,
          padding: 7,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            color: textColor,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          {btnLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
