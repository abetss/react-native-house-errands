import { compose } from 'recompose';
import { connect } from 'react-redux';

import { addTodo, toggleTodo, todoConnector } from './logic';
import { Todo } from './todo.component';

import { mapDispatchers } from '../../core/utils/store.utils';

const dispatchers = mapDispatchers({
  addTodo,
  toggleTodo,
});

export const TodoScreen = compose(connect(todoConnector, dispatchers))(Todo);
