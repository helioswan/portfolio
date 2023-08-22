<template>
  <section class="container mx-auto my-16 px-16">
    <TitleSection title="Hard skills" />
    <ul class="flex flex-wrap gap-8">
      <li
        v-for="skill in skills"
        :key="skill.name"
        class="flex gap-2"
        v-motion-fade-visible-once
        :delay="200"
      >
        <unicon name="check" class="fill-orange-600" />
        <div>
          <p class="text-[0.8rem] font-bold">
            {{ skill.name }}
          </p>
          <p class="text-[0.8rem]">
            {{ legend[skill.expertise] }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import TitleSection from "../Common/TitleSection.vue";

const legend = ["Basic knowledge", "", "Autonomous", "Expert"];
const skills = [
  { name: "HTML", expertise: 2 },
  {
    name: "CSS",
    expertise: 2,
  },
  {
    name: "TailwindCSS",
    expertise: 2,
  },
  {
    name: "JS",
    expertise: 2,
  },
  {
    name: "ReactJS",
    expertise: 1,
  },
  {
    name: "Gatsby",
    expertise: 0,
  },
  {
    name: "VueJS",
    expertise: 0,
  },
  {
    name: "Nuxt",
    expertise: 0,
  },
  {
    name: "Svelte",
    expertise: 0,
  },
  {
    name: "C/C++",
    expertise: 0,
  },
  {
    name: "Docker",
    expertise: 0,
  },
  {
    name: "Figma",
    expertise: 0,
  },
  {
    name: "Design system",
    expertise: 0,
  },
  {
    name: "Git",
    expertise: 0,
  },
];
</script>

<style scoped></style>
