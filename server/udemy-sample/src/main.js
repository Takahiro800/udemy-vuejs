import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./componentes/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);
// Vue.directive("border", function(el, binding) {});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
