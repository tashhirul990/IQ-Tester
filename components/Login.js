import { View, Text } from "react-native";
import React, { useState } from "react";
import Background from "./Background";
import Field from "./Field";
import { darkGreen } from "./Constants";
import Btn from "./Btn";
import { TouchableOpacity } from "react-native";
import { AsyncStorage } from "react-native";
import flush from "./Flush";
import { IP } from "./Constants";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function validateEmail() {
  //   var validRegex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //   if (!email.match(validRegex)) {
  //     alert("Valid email address!");
  //     return false;
  //   }
  //   return true;
  // }

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("Data stored in local storage");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    console.log("API hit");
    const URL = "http://"+IP+":8000/get_token/";
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });
    console.log("API Done");
    const res = await response.json();
    if (res.token != undefined) {
      flush("Login successfully", "success");
      navigation.navigate("LandingPage");
      storeData("token", res.token);
    } else {
      flush("Invalid username or password", "warning");
    }
    // console.log(JSON.parse(res));
  };
/*
  const handleSubmit = async () => {
    console.log("API hit");
    const URL = "http://"+IP+":8000/room/submit_quiz/";
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });
    console.log("API Done");
    const res = await response.json();
    if (res.token != undefined) {
      flush("Login successfully", "success");
      navigation.navigate("LandingPage");
      storeData("token", res.token);
    } else {
      flush("Invalid username or password", "warning");
    }
    // console.log(JSON.parse(res));
  };

*/

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
            onChange={(e) => {
              setEmail(e.nativeEvent.text);
            }}
            value={email}
          ></Field>
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChange={(e) => setPassword(e.nativeEvent.text)}
            value={password}
          ></Field>

          <View
            style={{ alignItems: "flex-end", width: "75%", marginBottom: 100 }}
          >
            <TouchableOpacity
              onPress={() =>
                alert(" We are working for it, will coming soon.. ")
              }
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
            press={handleSubmit}
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
              // onPress = { navigation.navigate("Signup") }
              onPress={() => {
                navigation.navigate("Signup");
              }}
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
