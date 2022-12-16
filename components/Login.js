import { View, Text } from "react-native";
import React, { useState } from "react";
import Background from "./Background";
import Field from "./Field";
import { darkGreen } from "./Constants";
import Btn from "./Btn";
import { TouchableOpacity } from "react-native";


export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 50,
          }}
        >
          Login
        </Text>
        <View
          style={{
            width: 400,
            height: 700,
            backgroundColor: "white",
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: "gray",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType="email-address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></Field>
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></Field>

          <View
            style={{ alignItems: "flex-end", width: "75%", marginBottom: 100 }}
          >
            <TouchableOpacity
              onPress={() => alert(" We are working it, will coming soon.. ")}
            >
              <Text style={{ color: darkGreen, fontWeight: "bold" }}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>

          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            press={() => alert("Loged In")}
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              // onPress={navigation.navigate("Signup")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}
