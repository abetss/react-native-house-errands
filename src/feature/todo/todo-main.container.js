import { compose } from 'recompose';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from './logic';
import { Todo } from './todo.main.component';
import { todoConnector } from './logic/todo.selector';

import { mapDispatchers } from '../../core/utils/store.utils';

const dispatchers = mapDispatchers({
  addTodo,
  toggleTodo,
});

export const TodoContainer = compose(connect(todoConnector, dispatchers))(Todo);
