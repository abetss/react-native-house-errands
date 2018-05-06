import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Text } from 'native-base';
import { Font, AppLoading } from 'expo';

import { TodoScreen } from '../todo';

const ProfileScreen = props => (
  <container>
    <content style={{ flexDirection: 'column', paddingTop: 10 }}>
      <Text>I'm Abtin Ghods</Text>
    </content>
  </container>
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
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <TodoScreen />;
  }
}
