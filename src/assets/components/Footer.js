import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Footer(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to HomeScreen")}
        style={styles.buttonWrapper1}
      >
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn1Text}>Beranda</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to WorldDataScreen")}
        style={styles.activeButtonWrapper}
      >
        <FeatherIcon name="book" style={styles.activeIcon}></FeatherIcon>
        <Text style={styles.activeContent}>Data Dunia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to FaqScreen")}
        style={styles.buttonWrapper2}
      >
        <FontAwesomeIcon
          name="question-circle-o"
          style={styles.icon2}
        ></FontAwesomeIcon>
        <Text style={styles.btn2Text}>FAQ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  buttonWrapper1: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  btn1Text: {
    backgroundColor: "transparent",
    color: "#9E9E9E",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto-Regular"
  },
  activeButtonWrapper: {
    flex: 1,
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(97,97,97,1)",
    fontSize: 24,
    opacity: 0.8
  },
  activeContent: {
    backgroundColor: "transparent",
    color: "rgba(158,158,158,1)",
    paddingTop: 4,
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  },
  buttonWrapper2: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  btn2Text: {
    backgroundColor: "transparent",
    color: "#9E9E9E",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto-Regular"
  }
});

export default Footer;
