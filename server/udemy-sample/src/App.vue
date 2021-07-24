<template>
  <div>
    <LikeHeader headerText="トータルのいいね数">
      <h2>みなさん</h2>
      <template v-slot:title>
        <h2>こんにちは</h2>
        <h2>{{}}</h2>
      </template>
      <h3>はじめまして</h3>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
      <p>よろしくお願いします</p>
    </LikeHeader>
    <LikeNumber :number="number" v-on:my-click="$event"></LikeNumber>
    <LikeNumber :number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./componentes/LikeHeader.vue";

export default {
  data() {
    return {
      number: 100,
    };
  },
  components: {
    LikeHeader,
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
