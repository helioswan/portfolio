<template>
  <a
    :href="href"
    :class="[sizes[props.size], colors[props.color], commonClass]"
    :aria-label="props.label"
    :target="props.target"
    v-if="href"
  >
    <slot />
  </a>
  <button
    :class="[sizes[props.size], colors[props.color], commonClass]"
    :aria-label="props.label"
    v-else
  >
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
  href: {
    required: false,
    type: String,
  },
  label: {
    required: true,
    type: String,
  },
  target: {
    required: false,
    type: String,
  },
});

const commonClass = "rounded-3xl font-medium ease-in-out duration-300 block";

const sizes = {
  base: "px-8 py-4 text-xl",
  md: "",
  sm: "",
  lg: "",
};

const colors = {
  primary: "text-white bg-primary hover:bg-primaryDark",
  secondary: "",
  empty:
    "text-grey bg-white border-2 border-grey hover:bg-grey hover:text-white",
};
</script>

<style scoped></style>
