<template>
  <h2 class="uppercase text-sm relative inline-block mb-8">
    {{ props.title }}
  </h2>
</template>

<script setup>
const props = defineProps({
  title: {
    required: true,
    default: "Title",
    type: String,
  },
});
</script>

<style scoped>
h2::after {
  @apply bg-yellow-300/60 translate-y-[-30%];
  position: absolute;
  content: "";
  width: 100%;
  height: 30%;
  position: top;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
