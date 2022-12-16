import { View, Text } from "react-native";
import React from "react";
import Background from "./Background";
import Field from "./Field";
import { darkGreen } from "./Constants";
import Btn from "./Btn";
import { TouchableOpacity } from "react-native";


export default function Signup({ navigation }) {
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
          <Field placeholder="First Name"></Field>
          <Field placeholder="Last Name"></Field>
          <Field
            placeholder="Contact Number"
            keyboardType={"phone-pad"}
          ></Field>
          <Field placeholder="Email ID" keyboardType="email-address"></Field>

          <Field placeholder="Password" secureTextEntry={true}></Field>
          <Field placeholder="Confirm Password" secureTextEntry={true}></Field>

          <View style={{ marginTop: 30 }}></View>

          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            press={() => {
              alert("Account cearted");
              props.navigation.navigate("Login");
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
                // onPress={ ()=>{
                //   //console.log( props.navigation );
                //    navigation.navigate("Login", {}) 
                // }
                //}  
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
