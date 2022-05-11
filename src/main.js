import Vue from "vue";
import App from "./App.vue";

import "./fake-chat.scss";
import "bootstrap/js/dist/modal";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
