import Vue from "vue";
import Vuex from "vuex";

/** Управление задачами */
import tasks from "./modules/tasks";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tasks
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("todo")) {
        this.replaceState({
          ...state,
          ...JSON.parse(localStorage.getItem("todo"))
        });
      }
    }
  }
});

store.subscribe((mutation, state) => {
  localStorage.setItem("todo", JSON.stringify(state));
});

export default store;
