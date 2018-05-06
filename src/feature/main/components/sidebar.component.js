import React from 'react';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Title,
  Subtitle,
  H2,
  H1,
  Left,
  Body,
  Header,
  Right,
} from 'native-base';

const routes = ['Todo', 'Profile'];
export class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <H1>House Errands</H1>
          <H2>You can do it...</H2>

          <List
            dataArray={routes}
            renderRow={data => (
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data)}
              >
                <Text>{data}</Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
