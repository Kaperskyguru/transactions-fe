import Vue from "vue";
import Vuex from "vuex";

import Repository from "./repositories/RepositoryFactory";
const Transactions = Repository.get("transactions");

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    transactions: [],
    errors: [],
  },

  getters: {
    show: (state) => (id) => {
      return state.transactions.find((transaction) => transaction.id === id);
    },
  },

  actions: {
    async all({ commit }, { size = 20, skip = 0 }) {
      const response = await Transactions.get(size, skip);
      const { data } = response;
      commit("STORE_TRANSACTIONS", data);
    },

    async filterByStartEndDate({ commit }, payload) {
      const response = await Transactions.filterByDate(payload);
      const { data } = response;
      commit("STORE_TRANSACTIONS", data);
    },
  },

  mutations: {
    STORE_TRANSACTIONS: (state, payload) => {
      state.transactions = payload;
    },

    STORE_ERROR: (state, payload) => {
      state.errors = payload;
    },
  },
});

export default store;
