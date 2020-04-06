import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function CardNews(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={{ uri: props.image }}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.bodyContent}>
        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.titleStyle}>{props.title}</Text>
        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.descriptionStyle}>{props.description}</Text>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity
          onPress={props.linkToRead}
          style={styles.actionButton1}>
          <Text style={styles.actionText1}>Baca Selengkapnya</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.actionButton3}>
          <Icon name="chevron-up" style={styles.iconStyle}></Icon>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 210
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 15,
    fontWeight: 'bold'
  },
  descriptionStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 12,
    lineHeight: 16
  },
  actionBody: {
    flexDirection: "row",
    padding: 8
  },
  actionButton1: {
    height: 36,
    padding: 8
  },
  actionText1: {
    color: "#000",
    opacity: 0.9,
    fontSize: 14
  },
  actionButton2: {
    height: 36,
    padding: 8
  },
  actionText2: {
    color: "#000",
    opacity: 0.9,
    fontSize: 14
  },
  actionButton3: {
    height: 36,
    position: "absolute",
    right: 8,
    bottom: 12,
    padding: 8
  },
  iconStyle: {
    fontSize: 24,
    color: "#000",
    opacity: 0.7
  }
});

export default CardNews;
