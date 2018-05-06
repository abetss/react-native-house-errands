import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Font, AppLoading } from 'expo';

import { SideBar } from './components';

import { TodoScreen } from '../todo';
import { ProfileScreen } from '../profile';

const AppRouter = DrawerNavigator(
  {
    Todo: { screen: TodoScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />,
  },
);

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
    return <AppRouter />;
  }
}
