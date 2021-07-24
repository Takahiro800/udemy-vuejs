<template>
  <div>
    <slot name="title"></slot>
    <slot></slot>
    <hr />
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
    },
  },
};
</script>
