import {
  INCREMENT_TODO,
  DECREMENT_TODO,
  SELECT_ALL,
  DELETE_COMPLETE,
  RECEIVE_TODOS
} from "./mutations-types";
import storeageUtils from "../utils/storageUtils";
export default {
  increment({ commit }, todo) {
    commit(INCREMENT_TODO, { todo });
  },
  decrement({ commit }, index) {
    commit(DECREMENT_TODO, { index });
  },
  selectAll({ commit }, value) {
    commit(SELECT_ALL, { value });
  },
  deleteAllCompleted({ commit }) {
    commit(DELETE_COMPLETE);
  },
  reqTodos({ commit }) {
    setTimeout(() => {
      const todos = storeageUtils.readTodos();
      commit(RECEIVE_TODOS, { todos });
    }, 500);
  }
};
