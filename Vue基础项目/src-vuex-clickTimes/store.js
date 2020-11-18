import Vue from "vue";
import Vuex from "vuex";

const state = {
  count: 0
};
const mutations = {
  INCREMENT(state) {
    state.count++;
  },
  DECREMENT(state) {
    state.count--;
  }
};
const actions = {
  increment({ commit }) {
    commit("INCREMENT");
  },
  decrement({ commit }) {
    commit("DECREMENT");
  },
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit("INCREMENT");
    }, 500);
  },
  incrementIfOdd({ commit, state }) {
    if (state.count % 2 === 0) {
      commit("INCREMENT");
    }
  }
};
const getters = {
  oddOrEven2(state) {
    return state.count % 2 === 0 ? "偶数" : "奇数";
  }
};
Vue.use(Vuex);
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
