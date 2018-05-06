import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
} from 'native-base';

export const MainLayout = ({ title, children, navigation }) => (
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
    <Content padder>{children}</Content>
  </Container>
);
