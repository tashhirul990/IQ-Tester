import React, { useState } from 'react';
import { View ,StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import Btn from './Btn';
import DownCounter from './DownCounter';

const LandingPage = () => {

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollView} showsHorizontalScrollIndicator="flase">
        <View style={{ alignItems: "center", width: 400 , height:1000 }}>
            <Text
                style={{
                color: "#78586F",
                fontSize: 32,
                fontWeight: "bold",
                marginTop: 20,
                }}
            >
                Wait for the Questions
            </Text>
            <View style={{ marginTop: 50 }} >
              <ActivityIndicator  size="large" color="#00ff00" />
            </View>
                
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor : "FFFBFE"
},
scrollView: {
  },
  text: {
    fontSize: 42,
  },
});

export default LandingPage;

