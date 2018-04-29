import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import TodoMain from "./src/todo/todo-main.container";

const Profile = props => (
  <View>
    <View style={{ flexDirection: "column", paddingTop: 10 }}>
      <Text>I'm Abtin Ghods</Text>
    </View>
  </View>
);

const Navigator = StackNavigator({
  Todo: { screen: TodoMain },
  Profile: { screen: Profile },
});
console.ignoredYellowBox = ["Remote debugger"];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: "powderblue" }}>
          <Text>Todo</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: "skyblue" }}>
          <Navigator />
        </View>
        <View style={{ flex: 3, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
