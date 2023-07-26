<template>
  <div class="md:basis-1/2">
    <h3 class="font-bold text-[0.8rem]">{{ props.title }}</h3>
    <p class="text-[0.8rem] mb-4">
      Niveau {{ legend[filled - 1] }} <br />
      {{ info }}
    </p>
    <div class="flex flex-row gap-2">
      <span
        v-for="index in props.filled"
        :key="index"
        aria-label=""
        class="dot bg-orange-600"
      ></span>
      <span
        v-for="index in empty"
        :key="index"
        class="dot border-[1px] border-gray-300"
      ></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  legend: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: false,
    default: "",
  },
  filled: {
    type: Number,
    required: true,
  },
});

const empty = props.legend.length - props.filled;
</script>

<style scoped>
.dot {
  @apply w-4 rounded-full aspect-square;
}
</style>
