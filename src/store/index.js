import Vuex from "vuex";
import api from "@/api";

export default Vuex.createStore({
  state: {
    data: {
      clima: "chuva",
    },
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
  },
  actions: {
    getData: async ({ commit }) => {
      const data = await api.getData();
      commit("setData", data);
    },
  },
  modules: {},
});
