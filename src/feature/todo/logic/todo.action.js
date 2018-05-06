import { todoActions } from "./todo.constant";

export const addTodo = text => ({
  type: todoActions.add,
  payload: text,
});

export const toggleTodo = id => ({
  type: todoActions.toggle,
  payload: id,
});
