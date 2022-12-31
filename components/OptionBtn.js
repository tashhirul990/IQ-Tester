import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const OptionBtn = ( {op, press} ) => {
 
  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.btn}
        onPress={press}
      >
        <Text style={styles.text}> {op.option} </Text>  
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    padding:20,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color:"#f2f4f3",
  },
  btn:{
    alignContent:"center",
    backgroundColor:"#78586f",
    padding: 10,
    borderRadius: 20
  }


  
});

export default OptionBtn;