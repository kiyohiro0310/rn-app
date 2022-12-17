import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colours } from "../constants/colours";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colours.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colours.accent500,
    padding: 12,
  },
});
