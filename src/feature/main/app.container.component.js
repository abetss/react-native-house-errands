import React from "react";
import { Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import { Main } from "../../components/layout";
import { TodoContainer } from "../todo";

const Profile = props => (
  <View>
    <View style={{ flexDirection: "column", paddingTop: 10 }}>
      <Text>I'm Abtin Ghods</Text>
    </View>
  </View>
);

// const Navigator = StackNavigator(
//   {
//     Todo: { screen: TodoMain },
//     Profile: { screen: Profile },
//   },
//   {
//     initialRouteName: "Todo",
//   },
// );

export class AppContainer extends React.Component {
  render() {
    return (
      <Main>
        <Text>Todo</Text>
        <TodoContainer />
      </Main>
    );
  }
}
