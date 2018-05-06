import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Card,
  CardItem,
  Content,
  Right,
  Icon,
  Button,
  Text,
} from 'native-base';

import { MainLayout } from '../../core/components';

export class ProfileScreen extends React.Component {
  render() {
    return (
      <MainLayout title="Profile" navigation={this.props.navigation}>
        <Card>
          <CardItem>
            <Icon active name="paper-plane" />
            <Text>Show User profiles here</Text>
            <Right>
              <Icon name="close" />
            </Right>
          </CardItem>
        </Card>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.navigate('Todo')}
        >
          <Text>Goto Todo</Text>
        </Button>
      </MainLayout>
    );
  }
}
