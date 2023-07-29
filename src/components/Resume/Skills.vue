<template>
  <section class="container mx-auto my-8">
    <TitleSection title="Programming skills" />
    <ul class="flex flex-wrap gap-16">
      <li v-for="skill in skills" :key="skill.name">
        <v-icon name="beer" /> {{ skill.name }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import TitleSection from "../TitleSection.vue";

const skills = [
  {
    name: "HTML",
    icon: "",
  },
  {
    name: "CSS",
    icon: "",
  },
  {
    name: "CSS",
    icon: "",
  },
  {
    name: "CSS",
    icon: "",
  },
  {
    name: "CSS",
    icon: "",
  },
];
</script>

<style scoped></style>
