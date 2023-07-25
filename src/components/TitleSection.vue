<template>
  <h2 class="uppercase text-base relative">{{ props.title }}</h2>
</template>

<script setup>
const props = defineProps({
  props: {
    required: true,
    default: "Title",
    type: String,
  },
});
</script>

<style scoped>
h2::after {
  content: "";
  width: 100%;
  height: 20%;
  position: top;
  left: 0;
  bottom: 0;
  transition: translateY(-80%);
}
</style>
