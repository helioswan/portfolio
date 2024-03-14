<template>
  <div class="mb-28">
    <Hero />
    <AboutMe />
    <div class="flex flex-row flex-wrap container mx-auto my-16 md:px-16 px-0">
      <Timeline :list="experiences" title="expérience professionnelle" />
      <Timeline :list="educations" title="formation" />
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
    list: [
      "Élaboration de script Prehome / Bandeaux.",
      "Création d'E-commerce sur des plateformes telles que Prestashop et Wix.",
      "Intégration de maquettes de Landing Page.",
      "Réalisation d'Email pour des campagnes telles que newsletters et publicités.",
    ],
    text: "Mon activité d'auto-entrepreneur pris naissance à la fin de mon stage chez Adfinitas. Ce status me permet de réaliser diverses missions dans le développement web pour plusieurs clients dont Adfinitas, et ce, en parallèle de mes études à EPITECH.",
  },
  {
    date: "Octobre 2022 - Présent",
    title: "Alternance - Ingénieur logiciel - Capgemini - Lille",
    list: [
      "Rédaction de remarque sur l'accessibilité et proposition de solution d'amélioration.",
      "Partage des bonnes pratiques au sein de l'équipe.",
      "Réécriture du code pour améliorer les performances.",
      "Intégration des maquettes en mettant l'accent sur une expérience utilisateur.",
      "Vérification de la qualité des développements et des intégrations.",
    ],
    text: "Ma mission au sein de Capgemini fut de façonner des systèmes d'information, des nouvelles solutions spécifiques pour répondre aux enjeux de digitalisation des clients.<br/> J'ai eu l'opportunité d'intervenir sur des projets de refonte d'interface, création d'interface, partager des bonnes pratiques et réaliser des audits accessibilité.",
  },
  {
    date: "Avril 2022 - Août 2022",
    title: "Stage - Ingénieur logiciel - Capgemini - Lille",
    list: [
      "Optimisation de l'interface de borne pour la rendre responsive.",
      "Conduite du processus d'intégration finale du site de présentation du Creative Studio.",
      "Élaboration d'un design system marque blanche pour accélérer la création de design systems.",
      "Réalisation d'un audit d'accessibilité RGAA sur un site gouvernemental.",
    ],
    text: "Ma mission au sein de Capgemini fut de façonner des systèmes d'information, des nouvelles solutions spécifiques pour répondre aux enjeux de digitalisation des clients.<br/> J'ai eu l'opportunité d'intervenir sur des projets de refonte d'interface, création d'interface, mise au point d'un design system et réaliser des audits accessibilité.",
  },
  {
    date: "Juillet 2020 - Décembre 2020",
    title: "Stage - Intégrateur web - Adfinitas - Lille",
    list: [
      "Élaboration de script Prehome / Bandeaux.",
      "Intégration de maquettes de Landing Page.",
      "Réalisation d'Email pour des campagnes telles que newsletters et publicités.",
    ],
    text: "Adfinitas est une agence de marketing relationnel consacrée aux acteurs de la générosité. Ce stage m'a permis de m'initier au développement web au travers de diverses missions telles que la création de landing page, l'intégration d'email et l'élaboration de script",
  },
];

const educations = [
  {
    date: "2022 - Présent",
    title: "MSc Pro - Epitech - Lille",
    list: [
      "Simulation de réponse à un appel d’offre (Fintech, Healthtech).",
      "Développement et gestion de projet web.",
      "Mise en situation d’une transformation digital (Retail, Fintech, Healthtech).",
      "Accompagnement des changements humains d’une organisation.",
    ],
    text: "MSc Pro est une formation en alternance proposé par Epitech offrant la possibilité aux étudiant de se spécialiser dans un domaine. Le titre d'Expert en management des systèmes d'information m'a permis d'apprendre d'avantage sur l'accompagnement des changements humains d’une organisation, l'assurance de la continuité d'un service, de la robustesse, de la fiabilité et de la sécurité d’un système d’information, la compréhension des enjeux métiers, stratégies et organisationnels d’une entreprise.",
  },
  {
    date: "2019 - 2022",
    title: "Programme Grande Ecole - Epitech - Lille",
    list: [
      "Projet mathématique en python.",
      "Réalisation d'un dashboard en React JS.",
      "Initiation Devops (Jenkis, Docker).",
      "Initiation Développement mobile (Flutter).",
      "Anglais Tepitech 860 (TOEIC Epitech).",
      "Simulation de lancement d'une start up.",
    ],
    text: "Epitech est une école proposant une formation d'Expert des Technologies de l'Information. Cette formation se base sur la découverte par projet imposant une autonomie et une rigueur de l'étudiant. Durant mon cursur, j'ai pu aborder l'algorithmie, le développement web, la programmation système, la sécurité, le DevOps et les mathématiques appliquées.",
  },
];

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
</script>

<style scoped></style>
