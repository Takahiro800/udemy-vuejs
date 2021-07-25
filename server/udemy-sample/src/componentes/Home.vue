<template>
  <div>
    <p v-border:solid.round.shadow="{ width: '5px', color: 'red' }">Home</p>
    <h2>{{ title | upperCase }}</h2>
    <h2>{{ title | lowerCase }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hellow",
      title: "Welcome to Tokyo",
    };
  },
  computed: {
    upperCaseTitle() {
      return this.title.toUpperCase();
    },
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    },
  },
  directives: {
    border(el, binding) {
      el.style.border = "solid black 2px";
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)";
      }
    },
  },
};
</script>
