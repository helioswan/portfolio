<template>
  <section
    id="mywork"
    class="container mx-auto md:my-32 my-8 flex flex-col gap-8 justify-center items-center px-6"
  >
    <div class="max-w-6xl flex flex-col w-full">
      <div class="flex justify-center gap-8 items-center mb-12">
        <hr class="grow border-b-2 rounded-full border-grey" />
        <h2 class="text-4xl font-extrabold border-grey">My Work</h2>
        <hr class="grow border-b-2 rounded-full border-grey" />
      </div>
    </div>
    <div class="max-w-7xl flex gap-32 flex-col">
      <div v-for="project in projects" :key="project.id">
        <ProjectCard
          :title="project.title"
          :desc="project.desc"
          :img="project.img"
          :live="project.live"
          :github="project.github"
          :reverse="project.reverse"
          :badges="project.badges"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    id: 0,
    title: "My project",
    desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolo Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolo",
    img: "avh_ifi23.png",
    badges: ["Badge1", "Badge2"],
    github: "liengithub",
    live: "lienlive",
    reverse: true,
  },
  {
    id: 1,
    title: "My project",
    desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolo Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolo",
    img: "avh_ifi23.png",
    badges: ["Badge1", "Badge2"],
    github: "liengithub",
    live: "lienlive",
  },
  {
    id: 2,
    title: "My project",
    desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolo Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolo",
    img: "avh_ifi23.png",
    badges: ["Badge1", "Badge2"],
    github: "liengithub",
    live: "lienlive",
    reverse: true,
  },
  {
    id: 3,
    title: "My project",
    desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolo Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolo",
    img: "avh_ifi23.png",
    badges: ["Badge1", "Badge2"],
    github: "liengithub",
    live: "lienlive",
  },
];
</script>

<style lang="scss" scoped></style>
