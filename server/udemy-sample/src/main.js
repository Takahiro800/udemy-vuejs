import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./componentes/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);
Vue.directive("border", function(el, binding) {
  el.style.border = "solid black 2px";
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg;
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
