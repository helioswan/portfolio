<template>
  <Header />
  <main>
    <Hero />
    <AboutMe />
    <div class="flex flex-row flex-wrap container mx-auto my-16">
      <Timeline :list="experiences" title="experience" />
      <Timeline :list="educations" title="education" />
    </div>
    <Progress />
    <Skills />
    <FavoriteProject />
  </main>
</template>

<script setup>
import Header from "../components/Common/Header.vue";
import Hero from "../components/Common/Hero.vue";
import AboutMe from "../components/Resume/AboutMe.vue";
import Timeline from "../components/Resume/Timeline.vue";
import Progress from "../components/Resume/Progress.vue";
import Skills from "../components/Resume/Skills.vue";
import FavoriteProject from "../components/Resume/FavoriteProject.vue";

const experiences = [
  {
    date: "2013 - Present",
    title: "Art Director - Facebook Inc",
    text: "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    date: "2013 - Present",
    title: "Art Director - Facebook Inc",
    text: "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    date: "2013 - Present",
    title: "Art Director - Facebook Inc",
    text: "Collaborate with creative and development teams on the execution of ideas.",
  },
];

const educations = [
  {
    date: "2013 - Present",
    title: "Art Director - Facebook Inc",
    text: "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    date: "2013 - Present",
    title: "Art Director - Facebook Inc",
    text: "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    date: "2013 - Present",
    title: "Art Director - Facebook Inc",
    text: "Collaborate with creative and development teams on the execution of ideas.",
  },
];
</script>

<style scoped></style>
