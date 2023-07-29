<template>
  <Header />
  <main>
    <Hero />
    <AboutMe />
    <div class="flex flex-row flex-wrap container mx-auto my-8">
      <Timeline :list="experiences" title="experience" />
      <Timeline :list="educations" title="education" />
    </div>
    <Progress />
    <Skills/>
  </main>
</template>

<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import AboutMe from "../components/Resume/AboutMe.vue";
import Timeline from "../components/Resume/Timeline.vue";
import Progress from "../components/Resume/Progress.vue";
import Skills from "../components/Resume/Skills.vue";

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
