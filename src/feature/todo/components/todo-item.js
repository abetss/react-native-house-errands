import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Text } from 'native-base';

import { todoStatus } from '../logic';

export const TodoItem = ({ id, text, status, onPress }) => (
  <ListItem
    onPress={() => {
      onPress(id);
    }}
  >
    <View style={styles.row}>
      <Text style={styles.textStatus}>
        {status === todoStatus.todo ? '[ ]' : '[X]'}
      </Text>
      <Text style={styles.textTodo}>{text}</Text>
    </View>
  </ListItem>
);

const ROW_HEIGHT = 20;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTodo: {
    height: ROW_HEIGHT,
    flex: 9,
  },
  textStatus: {
    height: ROW_HEIGHT,
    flex: 1,
  },
});
