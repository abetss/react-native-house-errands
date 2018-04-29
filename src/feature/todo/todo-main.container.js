import React, { Component } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

import { TodoItem } from "./components/todo-item";
import { TodoForm } from "./components/todo-form";
import { TODO_STATUS } from "./todo.constants";

const toggleTodoStatus = todo => ({
  ...todo,
  status:
    todo.status === TODO_STATUS.TODO ? TODO_STATUS.DONE : TODO_STATUS.TODO,
});

const makeTodo = (text, id, status = TODO_STATUS.TODO) => ({
  text,
  status,
  id,
});

const initialState = [
  { text: "But Pepsi", status: TODO_STATUS.TODO, id: 1 },
  { text: "Paint the car", status: TODO_STATUS.TODO, id: 2 },
  { text: "Write a sham", status: TODO_STATUS.Done, id: 3 },
  { text: "Don't sleep tonight", status: TODO_STATUS.TODO, id: 4 },
];

export class TodoMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: initialState,
    };
  }

  render() {
    const { list } = this.state;
    return (
      <View>
        <TodoForm onTodoSubmit={this.onTodoSubmit} />
        <View style={{ flexDirection: "column", paddingTop: 10 }}>
          {this.renderTodoItems(list)}
        </View>
      </View>
    );
  }

  renderTodoItems = items =>
    items.map(item => (
      <TodoItem
        id={item.id}
        key={`todo - ${item.id}`}
        text={item.text}
        status={item.status}
        onPress={this.onPressTodo}
      />
    ));

  onPressTodo = id => {
    const { list } = this.state;
    const newList = list.map(
      item => (item.id === id ? toggleTodoStatus(item) : item),
    );
    this.setState({ list: newList });
  };

  onTodoSubmit = text => {
    const list = this.state.list;
    const todo = makeTodo(text, list.length + 1);
    list.push(todo);
    this.setState({ list });
  };
}
