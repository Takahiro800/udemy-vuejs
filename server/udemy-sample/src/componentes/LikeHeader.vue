<template>
  <div>
    <slot name="title" :user="user"></slot>
    <slot></slot>
    <hr />
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald",
      },
    };
  },
};
</script>
