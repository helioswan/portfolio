<template>
  <Header />
  <main class="mb-28">
    <Hero />
    <ProjectDeck title="Favorite projects" :projects="favProjects" />
    <ProjectDeck title="Lastest projects" :projects="lastestProjects" />
    <ProjectDeck title="Projects" :projects="projects" />
  </main>
  <Social/>
</template>

<script setup>
import Header from "../components/Common/Header.vue";
import Hero from "../components/Common/Hero.vue";
import Social from "../components/Common/Social.vue";
import ProjectDeck from "../components/Project/ProjectDeck.vue";

const favProjects = [
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

const lastestProjects = [
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
