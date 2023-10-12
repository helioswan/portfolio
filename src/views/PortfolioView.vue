<template>
  <div class="mb-28 mx-16">
    <Hero />
    <ProjectDeck title="Projets favoris" :projects="projects" />
    <ProjectDeck title="Derniers projets" :projects="projects" />
    <ProjectDeck title="Projets" :projects="projects" />
  </div>
  <Social />
</template>

<script setup>
import Hero from "../components/Common/Hero.vue";
import Social from "../components/Common/Social.vue";
import ProjectDeck from "../components/Project/ProjectDeck.vue";

const projects = [
  {
    title: "Petits Freres des Pauvres - WANH",
    desc: "Campagne Enquête Nationale",
    imgUrl: "pfp-enquete22.jpg",
    githubLink: "",
    liveLink: "https://enquetenationale.petitsfreresdespauvres.fr/",
  },
  {
    title: "Vaincre la Mucoviscidose - WANH",
    desc: "Campagne LEGS",
    imgUrl: "vlm-leg22.jpg",
    githubLink: "",
    liveLink: "https://legs.vaincrelamuco.org/",
  },
  {
    title: "Le Jour du Seigneur - WANH",
    desc: "Campagne de fin d'année",
    imgUrl: "jds-fa22.jpg",
    githubLink: "",
    liveLink: "https://avent2022.lejourduseigneur.com/",
  },
  {
    title: "Association Valentin Haüy - WANH",
    desc: "Campagne de fin d'année",
    imgUrl: "avh_ifi23.png",
    githubLink: "",
    liveLink: "https://ifi.avh.asso.fr/",
  },
];

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
</script>

<style scoped></style>
