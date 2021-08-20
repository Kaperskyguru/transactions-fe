import Vue from "vue";
import Vuex from "vuex";

import Repository from "./repositories/RepositoryFactory";
const Transactions = Repository.get("transactions");

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    transactions: [],
    errors: "",
  },

  getters: {
    show: (state) => (id) => {
      return state.transactions.find((transaction) => transaction.id === id);
    },

    all: (state) => () => {
      return state.transactions;
    },
  },

  actions: {
    async all({ commit }, { size = 20, skip = 0 }) {
      const response = await Transactions.get(size, skip);
      const { data } = response;

      if (data.success) {
        commit("STORE_TRANSACTIONS", data.transactions);
        return;
      } else {
        commit("STORE_ERROR", data.message);
      }
    },

    async filterByStartEndDate({ commit }, payload) {
      const response = await Transactions.filterByDate(payload);
      const { data } = response;

      console.log(data.success);
      if (data.success) {
        commit("STORE_TRANSACTIONS", data.transactions);
      } else {
        commit("STORE_ERROR", data.message);
      }
    },
  },

  mutations: {
    STORE_TRANSACTIONS: (state, payload) => {
      state.transactions = payload;
      state.errors = "";
    },

    STORE_ERROR: (state, payload) => {
      state.errors = payload;
      state.transactions = [];
    },
  },
});

export default store;
