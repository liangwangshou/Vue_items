export default {
  completeCount(state) {
    return state.todos.reduce(
      (preTotal, todo) => preTotal + (todo.complete ? 1 : 0),
      0
    );
  },
  totalCount(state) {
    return state.todos.length;
  },
  isAllSelect(state, getters) {
    return (
      getters.completeCount === getters.totalCount && getters.totalCount > 0
    );
  }
};
