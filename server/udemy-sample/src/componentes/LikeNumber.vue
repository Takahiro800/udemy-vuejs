<template>
  <div>
    <p>いいね( {{ halfNumber }} )</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      // 必須か？
      required: true,
    },
  },
  computed: {
    halfNumber() {
      return this.number / 2;
    },
  },
  methods: {
    increment() {
      this.$emit("my-click", this.number + 1);
    },
  },
};
</script>
