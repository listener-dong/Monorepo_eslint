import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let a = "abc";

console.log("pkg-2", a);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
