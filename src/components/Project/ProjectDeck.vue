<template>
  <section class="container mx-auto my-16 md:px-16 px-0">
    <TitleSection :title="props.title" />
    <ul class="flex flex-wrap gap-8 md:justify-start justify-center">
      <li
        v-for="project in props.projects"
        :key="project.title"
        class="flex gap-2"
        v-motion-fade-visible-once
        :delay="200"
      >
        <ProjectCard
          :title="project.title"
          :desc="project.desc"
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
import ProjectCard from "./ProjectCard.vue";

const props = defineProps({
  projects: {
    required: true,
    type: Object,
  },
  title: {
    required: true,
    type: String,
  },
});
</script>

<style scoped></style>
