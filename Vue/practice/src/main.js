import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store";

// 全局组件、指令、原型等统一注册
import "./register";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
