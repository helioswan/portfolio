<template>
  <div class="mb-28">
    <Hero />
    <AboutMe />
    <div class="flex flex-row flex-wrap container mx-auto my-16 md:px-16 px-0">
      <Timeline :list="experiences" title="expériences professionnelles" />
      <Timeline :list="educations" title="éducation" />
    </div>
    <Progress />
    <Skills />
    <ProjectDeck title="Projets favoris" :projects="projects" />
    <div class="mx-auto container flex">
      <router-link
        to="/portfolio"
        class="mx-auto text-[0.8rem] hover:text-white hover:border-orange-600 hover:bg-orange-600 ease-in-out duration-300 border-gray-200 border px-8 py-2"
      >
        Voir plus de projets
      </router-link>
    </div>
  </div>
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
    date: "Janvier 2021 - Présent",
    title:
      "Auto-entrepreneur - Développeur web / Intégrateur web - WANH - Lille",
    text: "Mon activité d'auto-entrepreneur pris naissance à la fin de mon stage chez Adfinitas. Ce status me permet de réaliser diverses missions dans le développement web pour plusieurs clients dont Adfinitas, et ce, en parallèle de mes études à EPITECH.",
  },
  {
    date: "Octobre 2023 - Présent",
    title: "Alternance - Ingénieur logiciel - Capgemini - Lille",
    text: "Ma mission au sein de Capgemini fut de façonner des systèmes d'information, des nouvelles solutions spécifiques pour répondre aux enjeux de digitalisation des clients. J'ai eu l'opportunité d'intervenir sur des projets de refonte d'interface, création d'interface, partager des bonnes pratiques et réaliser des audits accessibilité.",
  },
  {
    date: "Avril 2022 - Août 2022",
    title: "Stage - Ingénieur logiciel - Capgemini - Lille",
    text: "Ma mission au sein de Capgemini fut de façonner des systèmes d'information, des nouvelles solutions spécifiques pour répondre aux enjeux de digitalisation des clients. J'ai eu l'opportunité d'intervenir sur des projets de refonte d'interface, création d'interface, mise au point d'un design system et réaliser des audits accessibilité.",
  },
  {
    date: "Juillet 2020 - Décembre 2020",
    title: "Stage - Intégrateur web - Adfinitas - Lille",
    text: "Adfinitas est une agence de marketing relationnel consacrée aux acteurs de la générosité. Ce stage m'a permis de m'initier au développement web au travers de diverses missions telles que la création de landing page, l'intégration d'email et l'élaboration de script",
  },
];

const educations = [
  {
    date: "2022 - Présent",
    title: "MSc Pro - Epitech - Lille",
    text: "MSc Pro est une formation en alternance proposé par Epitech offrant la possibilité aux étudiant de se spécialiser dans un domaine. Le titre d'Expert en management des systèmes d'information m'a permis d'apprendre d'avantage sur l'accompagnement des changements humains d’une organisation, l'assurance de la continuité d'un service, de la robustesse, de la fiabilité et de la sécurité d’un système d’information, la compréhension des enjeux métiers, stratégies et organisationnels d’une entreprise.",
  },
  {
    date: "2019 - 2022",
    title: "Programme Grande Ecole - Epitech - Lille",
    text: "Epitech est une école proposant une formation d'Expert des Technologies de l'Information. Cette formation se base sur la découverte par projet imposant une autonomie et une rigueur de l'étudiant. Durant mon cursur, j'ai pu aborder l'algorithmie, le développement web, la programmation système, la sécurité, le DevOps et les mathématiques appliquées.",
  },
];

const projects = [
  {
    title: "Petits Freres des Pauvres - WANH",
    desc: "Campagne Enquête Nationale",
    imgUrl: "src/assets/img/thumbnails/pfp-enquete22.jpg",
    githubLink: "",
    liveLink: "https://enquetenationale.petitsfreresdespauvres.fr/",
  },
  {
    title: "Vaincre la Mucoviscidose - WANH",
    desc: "Campagne LEGS",
    imgUrl: "src/assets/img/thumbnails/vlm-leg22.jpg",
    githubLink: "",
    liveLink: "https://legs.vaincrelamuco.org/",
  },
  {
    title: "Le Jour du Seigneur",
    desc: "Campagne de fin d'année",
    imgUrl: "src/assets/img/thumbnails/jds-fa22.jpg",
    githubLink: "",
    liveLink: "https://avent2022.lejourduseigneur.com/",
  },
  {
    title: "Association Valentin Haüy",
    desc: "Campagne de fin d'année",
    imgUrl: "src/assets/img/thumbnails/avh_ifi23.png",
    githubLink: "",
    liveLink: "https://ifi.avh.asso.fr/",
  },
];
</script>

<style scoped></style>
