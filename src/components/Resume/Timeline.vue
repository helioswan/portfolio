<template>
  <section class="md:basis-1/2">
    <TitleSection :title="props.title" />
    <ul class="mt-4">
      <li
        v-motion-slide-visible-once-right
        v-for="item in list"
        :key="item.title"
        class="p-12 border-orange-600 border-l-[1px] relative list"
      >
        <p
          class="text-xs border-orange-600 border-[1px] text-orange-600 absolute top-0 translate-y-[-50%] p-2 date"
        >
          {{ item.date }}
        </p>
        <h3 class="font-bold text-[0.8rem] mb-4">{{ item.title }}</h3>
        <p class="text-[0.8rem]">
          {{ item.text }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import TitleSection from "../TitleSection.vue";
const props = defineProps({
  title: {
    required: true,
    default: "Title",
    type: String,
  },
  list: {
    required: true,
    type: Object,
  },
});
</script>

<style scoped>
.date::before {
  content: "";
  @apply absolute left-0 translate-x-[-100%] top-1/2 h-[1px] bg-orange-600 w-[3.1rem];
}
.list:last-child {
  @apply border-none;
}
</style>
