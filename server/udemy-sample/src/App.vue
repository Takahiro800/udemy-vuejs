<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :number="number" v-on:my-click="$event"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import LikeHeader from "./componentes/LikeHeader.vue";
import Home from "./componentes/Home.vue";
import About from "./componentes/About.vue";

export default {
  data() {
    return {
      number: 100,
      currentComponent: "Home",
    };
  },
  components: {
    LikeHeader,
    Home,
    About,
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
