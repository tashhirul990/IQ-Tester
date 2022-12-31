import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import OptionBtn from "./OptionBtn";
import flush from "./Flush";

export default function QuestionPage({ route, navigation }) {
  var { data, score, setScore, questionTime } = route.params;
  data = JSON.parse(data);
  const [running, setRunning] = useState(true);
  const [time, setTime] = useState(questionTime);


  // Pendding for review
  const interval = setTimeout(countdown, 1000);
  function countdown() {
    if (time == 0) {
      clearTimeout(interval);
      navigation.goBack(null);
    }
    setTime(time - 1);
    // console.log(time);
  }

  const evaluate = (bntNum) => {
    clearTimeout(interval);
    if (data.message.answers[bntNum]["correct"]) {
      var s = Math.round((50 + time * 1.6667) * 100) / 100;
      flush("Correct answer: +" + s, "success");
      setScore(Math.round((score + s) * 100) / 100);
    } else {
      flush("Wrong answer", "danger");
    }
    navigation.goBack(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator="flase"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            padding: 2,
            width: 50,
            height: 50,
            borderRadius: 50,
            borderStyle: "solid",
            borderWidth: 5,
            borderColor: "#0052cc",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {time}
          </Text>
        </View>

        <View style={{ alignItems: "center", width: 380 }}>
          <Text
            style={{
              color: "#78586F",
              fontSize: 32,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            {data.message.question}
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <OptionBtn
            op={data.message.answers[0]}
            press={() => {
              evaluate(0);
            }}
          />
          <OptionBtn
            op={data.message.answers[1]}
            press={() => {
              evaluate(1);
            }}
          />
          <OptionBtn
            op={data.message.answers[2]}
            press={() => {
              evaluate(2);
            }}
          />
          <OptionBtn
            op={data.message.answers[3]}
            press={() => {
              evaluate(3);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "FFFBFE",
  },
  scrollView: {},
  text: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    fontSize: 42,
  },
});

/*
    data : {"message": 
    {
        "question": "Is Python case sensitive when dealing with identifiers?", 
        "answers": [
            {"option": "Is Python case sensitive when dealing with identifiers?", 
            "correct": false
            }, 
            {"option": "no", 
            "correct": false
            }, 
            {"option":"none of the mentioned", 
            "correct": false
            }, 
            {"option": "machine dependent", 
            "correct": true
            }
        ]
    }, 
"count": 2, 
"endQuiz": false
}

*/
