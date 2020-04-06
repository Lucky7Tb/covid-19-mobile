import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Button(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(55,180,224,1)",
    borderRadius: 15,
    justifyContent: "center"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    lineHeight: 20,
    alignSelf: "center"
  }
});

export default Button;
