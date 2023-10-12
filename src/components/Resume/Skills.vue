<template>
  <section class="container mx-auto my-16 md:px-16 px-0">
    <TitleSection title="Compétences techniques" />
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

const legend = ["Débutant", "Autonome", "Expert"];
const skills = [
  { name: "HTML", expertise: 1 },
  {
    name: "CSS",
    expertise: 1,
  },
  {
    name: "TailwindCSS",
    expertise: 1,
  },
  {
    name: "JS",
    expertise: 1,
  },
  {
    name: "ReactJS",
    expertise: 0,
  },
  {
    name: "Gatsby",
    expertise: 0,
  },
  {
    name: "VueJS",
    expertise: 1,
  },
  {
    name: "Nuxt",
    expertise: 1,
  },
  {
    name: "Svelte",
    expertise: 1,
  },
  {
    name: "C/C++",
    expertise: 1,
  },
  {
    name: "Docker",
    expertise: 1,
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
    expertise: 1,
  },
];
</script>

<style scoped></style>
