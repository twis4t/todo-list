import Vue from "vue";
import Vuex from "vuex";

/** Управление задачами */
import tasks from "./modules/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks
  }
});
