import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Header(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.mobile}>Mobile</Text>
      <Text style={styles.c19}>C-19</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(55,180,224,1)"
  },
  mobile: {
    color: "rgba(241,234,234,1)",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    flex: 1,
    marginBottom:-100,
    marginTop: '12%',
    marginLeft: '7%'
  },
  c19: {
    width: 65,
    height: 35,
    color: "rgba(249,245,245,1)",
    fontSize: 30,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    marginBottom: '9%',
    marginLeft: '5%'
  }
});

export default Header;
