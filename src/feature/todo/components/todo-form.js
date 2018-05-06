import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Form, Label } from 'native-base';

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const { text } = this.state;
    return (
      <Form>
        <Item floatingLabel>
          <Label>To do</Label>
          <Input
            name="todo"
            value={text}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onTodoSubmit}
            style={styles.input}
          />
        </Item>
      </Form>
    );
  }

  onTodoSubmit = () => {
    this.props.onTodoSubmit(this.state.text);
    this.setState({ text: '' });
  };

  onChangeText = text => this.setState({ text });
}

const styles = StyleSheet.create({
  input: {},
});
