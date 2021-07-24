<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :number="number" v-on:my-click="$event"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model="eventData.title" />
      <p>{{ eventData.title }}</p>
    </div>
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
      eventData: {
        title: "たいとる",
      },
    };
  },
  components: {
    LikeHeader,
    Home,
    About,
  },
};
</script>
