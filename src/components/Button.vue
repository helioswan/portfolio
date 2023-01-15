<template>
  <button
    :class="
      variant === 'secondary'
        ? 'bg-white border-black  text-black hover:bg-black hover:text-white' +
          extraClass
        : 'bg-primary border-primary text-white hover:bg-primaryDark hover:border-primaryDark' +
          extraClass
    "
    class="py-1 px-6 text-center rounded-xl text-xl transition-colors border-2"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: String,
  extraClass: String,
});
</script>

<style scoped></style>
