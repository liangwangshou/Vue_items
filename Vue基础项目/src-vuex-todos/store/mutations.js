import {
  INCREMENT_TODO,
  DECREMENT_TODO,
  SELECT_ALL,
  DELETE_COMPLETE,
  RECEIVE_TODOS
} from "./mutations-types";

export default {
  [INCREMENT_TODO](state, { todo }) {
    state.todos.unshift(todo);
  },
  [DECREMENT_TODO](state, { index }) {
    state.todos.splice(index, 1);
  },
  [SELECT_ALL](state, { value }) {
    state.todos.forEach(todo => (todo.complete = value));
  },
  [DELETE_COMPLETE](state) {
    state.todos = state.todos.filter(todo => !todo.complete);
  },
  [RECEIVE_TODOS](state, { todos }) {
    state.todos = todos;
  }
};
