<template>
  <a :href="{ link }" v-if="link">
    <slot />
  </a>
  <button :class="[sizes[props.size], colors[props.color], commonClass]" v-else>
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  color: {
    required: false,
    type: String,
    default: "primary",
  },
  size: {
    required: false,
    type: String,
    default: "base",
  },
  link: {
    required: false,
    type: String,
  },
});

const commonClass = "rounded-3xl font-medium ease-in-out duration-300";

const sizes = {
  base: "px-8 py-4 text-xl",
  md: "",
  sm: "",
  lg: "",
};

const colors = {
  primary: "text-white bg-primary hover:bg-primaryDark",
  secondary: "",
  empty: "text-grey bg-white border-2 border-grey hover:bg-grey hover:text-white",
};
</script>

<style scoped></style>
