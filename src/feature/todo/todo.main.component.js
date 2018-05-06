import React from 'react';
import { View } from 'react-native';

import { TodoForm } from './components/todo-form';
import { TodoItem } from './components/todo-item';

const renderTodoItems = (items, toggleTodo) =>
  items.map(item => (
    <TodoItem
      id={item.id}
      key={`todo - ${item.id}`}
      text={item.text}
      status={item.status}
      onPress={toggleTodo}
    />
  ));

export const Todo = ({ list, addTodo, toggleTodo }) => (
  <View>
    <TodoForm onTodoSubmit={addTodo} />
    <View style={{ flexDirection: 'column', paddingTop: 10 }}>
      {renderTodoItems(list, toggleTodo)}
    </View>
  </View>
);
