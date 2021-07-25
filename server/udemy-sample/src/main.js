import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./componentes/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);
// Vue.directive("border", function(el, binding) {});
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
