import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import { TODO_STATUS } from "../todo.constants";

export const TodoItem = ({ id, text, status, onPress }) => (
  <TouchableHighlight
    onPress={() => {
      console.log("clicked");
      onPress(id);
    }}
  >
    <View style={styles.row}>
      <Text
        style={{
          flex: 1,
          width: 20,
          height: 80,
        }}
      >
        {status === TODO_STATUS.TODO ? "[ ]" : "[X]"}
      </Text>
      <Text
        style={{
          flex: 10,
          height: 80,
        }}
      >
        {text}
      </Text>
    </View>
  </TouchableHighlight>
);

const ROW_HEIGHT = 40;

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#fff",
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
    height: ROW_HEIGHT,
  },
  timeline: {
    height: ROW_HEIGHT,
    width: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  timelineVerticalLink: {
    height: ROW_HEIGHT,
    width: 1,
    backgroundColor: "#526373",
    justifyContent: "center",
  },
  icon: {
    color: "#e7d629",
    backgroundColor: "transparent",
    position: "absolute",
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "500",
    color: "white",
  },
  time: {
    fontSize: 10,
    fontWeight: "400",
    color: "#828B7B",
  },
});
