import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import Btn from "./Btn";
import { AsyncStorage } from "react-native";
import { IP } from "./Constants";
import ShowResults from "./ShowResult";

const TestPage = ({ route, navigation }) => {
  const { ws, roomID } = route.params;
  const [score, setScore] = useState(0);
  const [heading, setHeading] = useState("Wait for the Question");
  const [animating, setAnimating] = useState(true);
  const [scoreMsg, setScoreMsg] = useState("Current Score");
  const [resutList, setResultList] = useState([{ name: "Tashhir", score: 30 }]);
  const [hide, setHide] = useState(true);

  const result = async () => {
    setHide(false);
    const URL = "http://" + IP + ":8000/submit_quiz_answers/";
    const token = await AsyncStorage.getItem("token");
    // const response = await fetch(URL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "token " + token,
    //   },
    //   body: JSON.stringify({
    //     score: score,
    //   }),
    // });
    // const res = await response.json();
    // console.log(res);

    const p1 = fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "token " + token,
        },
        body: JSON.stringify({
          roomid : roomID,
          points : score,
        }),
      });
    const p2 = new Promise((resolve, reject) => {
      setTimeout(resolve, 5000, new Error("timeout"));
    });

    Promise.race([p1, p2]).then((res) => {
      if (res instanceof Error) {
        console.warn(res);
        console.log("Tashhir:res 1 : "+res);
      } else {
        res.json().then((resultRes) => {
          console.log(resultRes);
          setResultList( resultRes.data );
        });
      }
    });
  };

  ws.current.onmessage = (e) => {
    // a message was received

    console.log(typeof e.data);
    const data = JSON.parse(e.data);
    if (data.endQuiz) {
      setHeading("Quiz Ends");
      setScoreMsg("Total Score");
      setAnimating(false);
      result();
    } else if (data.message.question != null) {
      navigation.navigate("QuestionPage", {
        data: e.data,
        score: score,
        setScore: setScore,
        questionTime: 30,
      });
    }
    console.log("\nTest Page OnMassege \n" + e.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator="flase"
      >
        <View style={{ alignItems: "center", width: 400 }}>
          <Text
            style={{
              color: "#78586F",
              fontSize: 32,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            {heading}
          </Text>
          <Text
            style={{
              color: "#78586F",
              fontSize: 32,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            {scoreMsg} : {score}
          </Text>
          <View style={{ marginTop: 50 }}>
            <ActivityIndicator
              // color="#0000ff"
              animating={animating}
              color="#C00"
              size="large"
              hidesWhenStopped={true}
            />
          </View>
        </View>
        {!hide ? (
          <View>
            <ShowResults list={resutList} />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "FFFBFE",
  },
  scrollView: {},
  text: {
    fontSize: 42,
  },
});

export default TestPage;
