import { todoStatus, todoActions } from './todo.constant';

import { makeOverwrite } from '../../../core/utils';

const initialState = {
  list: [
    { text: 'But Pepsi', status: todoStatus.todo, id: 1 },
    { text: 'Paint the car', status: todoStatus.todo, id: 2 },
    { text: 'Write a sham', status: todoStatus.done, id: 3 },
    { text: "Don't sleep tonight", status: todoStatus.todo, id: 4 },
  ],
};

const toggleTodoStatus = todo => ({
  ...todo,
  status: todo.status === todoStatus.todo ? todoStatus.done : todoStatus.todo,
});

const createNewTodo = (text, id, status = todoStatus.todo) => ({
  text,
  status,
  id,
});

export const todoReducer = (state = initialState, action) => {
  const updateState = makeOverwrite(state);
  switch (action.type) {
    case todoActions.add:
      const todoText = action.payload;
      const newId = state.list.length + 1;
      const todo = createNewTodo(todoText, newId);
      return updateState({ list: [...state.list, todo] });

    case todoActions.toggle:
      const id = action.payload;
      const list = state.list.map(
        item => (item.id === id ? toggleTodoStatus(item) : item),
      );
      return updateState({ list });

    default:
      return state;
  }
};
