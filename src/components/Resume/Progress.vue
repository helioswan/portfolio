<template>
  <section class="container mx-auto my-16">
    <TitleSection title="Languages skills" />
    <ul class="flex flex-wrap gap-16">
      <li v-for="language in languages" :key="language.title">
        <ProgressBar
          :legend="legend"
          :title="language.title"
          :filled="language.value"
          :text="language.text"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
import TitleSection from "../TitleSection.vue";
import ProgressBar from "./ProgressBar.vue";

const legend = ["A1", "A2", "B1", "B2", "C1", "C2"];
const languages = [
  {
    title: "Français",
    value: 6,
  },
  {
    title: "Anglais",
    value: 4,
    text: ""
  },
  {
    title: "Chinois",
    value: 2,
  },
];
</script>

<style scoped></style>
