import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Main = props => (
  <View style={styles.container}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
  },
});
