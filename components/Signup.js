import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Background from "./Background";
import Field from "./Field";
import { darkGreen, IP } from "./Constants";
import Btn from "./Btn";
import flush from "./Flush";

export default function Signup({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [keyboardView, setkeyboardView] = useState({ enabled: "false" });

  const handleSignup = async () => {
    console.log("API hit");
    const URL = "http://"+IP+":8000/signup/";
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      }),
    });
    console.log("API Done");
    const res = await response.json();

    if(res.success) {
      flush(res.message, "success");
      navigation.navigate("Login");
    } else {
      flush(res.message, "danger");
    }
  };


  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginBottom: 20,
            fontWeight: "bold",
          }}
        >
          Create new Account
        </Text>
          <View
            style={{
              width: 400,
              height: 700,
              backgroundColor: "white",
              borderTopLeftRadius: 130,
              paddingTop: 80,
              alignItems: "center",
            }}
          >
            <Field
              placeholder="First Name"
              onChange={(e) => setFirstName(e.nativeEvent.text)}
            ></Field>
            <Field
              placeholder="Last Name"
              onChange={(e) => setLastName(e.nativeEvent.text)}
            ></Field>
            <Field
              onPressIn={() => {
                setkeyboardView({});
              }}
              placeholder="Email ID"
              keyboardType="email-address"
              onChange={(e) => setEmail(e.nativeEvent.text)}
            ></Field>

            <Field
              onPressIn={() => {
                setkeyboardView({});
              }}
              placeholder="Password"
              secureTextEntry={true}
              onChange={(e) => setPassword(e.nativeEvent.text)}
            ></Field>
            <Field
              onPressIn={() => {
                setkeyboardView({});
              }}
              onEndEditing={() => {
                setkeyboardView({ enabled: "false" });
              }}
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChange={(e) => setConfirmPassword(e.nativeEvent.text)}
            ></Field>

            <View style={{ marginTop: 30 }}></View>

            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Signup"
              press={() => {
                //printData();
                handleSignup();
              }}
            />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {" "}
                Already have an account ?{" "}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </Background>
  );
}
