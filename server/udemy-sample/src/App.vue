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
      <hr />

      <label for="maxNumber">最大人数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.number" />
      <p>{{ eventData.number }}</p>
      <hr />

      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre">{{ eventData.detail }}</p>
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
        number: 0,
        detail: "",
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
