import Vue from "vue";
import App from "./App.vue";
import store from "./store";

/** Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faEdit, faTrashAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: function(h) {
    return h(App);
  },
  beforeCreate() {
    this.$store.commit("initialiseStore");
  }
}).$mount("#app");
