import { createSelector, createStructuredSelector } from 'reselect';
import { path } from 'ramda';

const selectTodo = path(['todo', 'list']);

export const todoConnector = createStructuredSelector({
  list: selectTodo,
});
