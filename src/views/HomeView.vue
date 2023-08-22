<template>
  <main class="mb-28">
    <Hero />
    <AboutMe />
    <div class="flex flex-row flex-wrap container mx-auto my-16 px-16">
      <Timeline :list="experiences" title="experience" />
      <Timeline :list="educations" title="education" />
    </div>
    <Progress />
    <Skills />
    <ProjectDeck title="Favorite projects" :projects="projects" />
    <div class="mx-auto container flex">
      <router-link
        to="/portfolio"
        class="mx-auto text-[0.8rem] hover:text-white hover:border-orange-600 hover:bg-orange-600 ease-in-out duration-300 border-gray-200 border px-8 py-2"
      >
        See more projects
      </router-link>
    </div>
  </main>
  <Social />
</template>

<script setup>
import Hero from "../components/Common/Hero.vue";
import Social from "../components/Common/Social.vue";
import AboutMe from "../components/Resume/AboutMe.vue";
import Timeline from "../components/Resume/Timeline.vue";
import Progress from "../components/Resume/Progress.vue";
import Skills from "../components/Resume/Skills.vue";
import ProjectDeck from "../components/Project/ProjectDeck.vue";

const experiences = [
{
    date: "January 2021 - Present",
    title: "Self-employed - Front End Developer / UI Developer - WANH",
    text: "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    date: "October 2023 - Present",
    title: "Apprentice - Software Engineer - Capgemini",
    text: "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    date: "April 2022 - August 2022",
    title: "Internship - Front End Developer - Capgemini",
    text: "Collaborate with creative and development teams on the execution of ideas.",
  },
  {
    date: "July 2020 - December 2020",
    title: "Internship - UI Developer - Adfinitas",
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

const projects = [
  {
    title: "Title",
    desc: "Desc",
    shortDesc: "Short desc",
    imgUrl: "",
    githubLink: "Github",
    liveLink: "Live",
  },
  {
    title: "Title",
    desc: "Desc",
    shortDesc: "Short desc",
    imgUrl: "",
    githubLink: "Github",
    liveLink: "Live",
  },
  {
    title: "Title",
    desc: "Desc",
    shortDesc: "Short desc",
    imgUrl: "",
    githubLink: "Github",
    liveLink: "Live",
  },
  {
    title: "Title",
    desc: "Desc",
    shortDesc: "Short desc",
    imgUrl: "",
    githubLink: "Github",
    liveLink: "Live",
  },
];
</script>

<style scoped></style>
