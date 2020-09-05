import Vue from "vue";
import App from "./App.vue";
import CrispChat from "../src/index.js";

Vue.use(CrispChat, {
  websiteId: CRISP_WEBSITE_ID,
  disabled: true,
  hideOnLoad: true
});

new Vue({
  el: "#app",
  render: h => h(App)
});
