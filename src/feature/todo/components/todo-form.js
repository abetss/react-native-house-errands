import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Animated } from 'react-native';

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const { text } = this.state;
    return (
      <TextInput
        value={text}
        placeholder="Todo"
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onTodoSubmit}
        style={styles.input}
      />
    );
  }

  onTodoSubmit = () => {
    this.props.onTodoSubmit(this.state.text);
    this.setState({ text: '' });
  };

  onChangeText = text => this.setState({ text });
}

const styles = StyleSheet.create({
  input: {
    padding: 1,
    backgroundColor: 'white',
  },
});
