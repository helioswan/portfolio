<template>
  <section class="container mx-auto my-16">
    <TitleSection title="Favorite projects" />
    <ul class="flex flex-wrap gap-8 md:justify-start justify-center">
      <li
        v-for="project in projects"
        :key="project.title"
        class="flex gap-2"
        v-motion-fade-visible-once
        :delay="200"
      >
        <ProjectCard
          :title="project.title"
          :desc="project.desc"
          :shortDesc="project.shortDesc"
          :imgUrl="project.imgUrl"
          :liveLink="project.liveLink"
          :githubLink="project.githubLink"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
import TitleSection from "../Common/TitleSection.vue";
import ProjectCard from "../Common/ProjectCard.vue";

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
