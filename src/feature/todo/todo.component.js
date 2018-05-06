import React from 'react';
import { View } from 'react-native';
import { List } from 'native-base';

import { TodoForm } from './components/todo-form';
import { TodoItem } from './components/todo-item';

import { MainLayout } from '../../core/components';

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
  <MainLayout title="Todo">
    <TodoForm onTodoSubmit={addTodo} />
    <List
      style={{
        paddingTop: 50,
      }}
    >
      {renderTodoItems(list, toggleTodo)}
    </List>
  </MainLayout>
);
