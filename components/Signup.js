import { View, Text } from "react-native";
import React, { useState } from "react";
import Background from "./Background";
import Field from "./Field";
import { darkGreen } from "./Constants";
import Btn from "./Btn";
import { TouchableOpacity } from "react-native";


export default function Signup({ navigation }) {
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [contactNumber , setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function printData(){
    alert( firstName+" "+lastName+"\n"+contactNumber+"\n"+email+"\n"+password+"\n"+confirmPassword );
  }

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
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Field placeholder="First Name"
            onChange={(e) => setFirstName(e.nativeEvent.text)}
          ></Field>
          <Field placeholder="Last Name"
            onChange={(e) => setLastName(e.nativeEvent.text)}
          ></Field>
          <Field
            placeholder="Contact Number"
            keyboardType={"phone-pad"}
            onChange={(e) => setContactNumber(e.nativeEvent.text)}
          ></Field>
          <Field placeholder="Email ID" keyboardType="email-address"
            onChange={(e) => setEmail(e.nativeEvent.text)}
          ></Field>

          <Field placeholder="Password" secureTextEntry={true}
            onChange={(e) => setPassword(e.nativeEvent.text)}
          ></Field>
          <Field placeholder="Confirm Password" secureTextEntry={true}
            onChange={(e) => setConfirmPassword(e.nativeEvent.text)}
          ></Field>

          <View style={{ marginTop: 30 }}></View>

          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            press={() => {
              printData();
              navigation.navigate("Login");
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
                onPress = { ()=>  navigation.navigate("Login") }
              >
                {" "}
                Login{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}
