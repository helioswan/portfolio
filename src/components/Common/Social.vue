<template>
  <aside class="fixed right-0 bottom-0 w-full bg-white">
    <ul class="text-right flex flex-row justify-center md:justify-end">
      <li
        v-for="link in links"
        :key="link.name"
        class="text-[0.8rem] my-6 mx-8"
      >
        <a target="_blank" :href="link.path" :aria-label="link.label">
          <unicon
            :name="link.icon"
            class="hover:fill-orange-600 ease-in-out duration-300"
          />
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const links = [
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/helioswan/",
    label: "Lien vers la page linkedin",
    icon: "linkedin",
  },
  {
    name: "Github",
    path: "https://github.com/helioswan",
    icon: "github",
    label: "Lien vers la page github",
  },
  {
    name: "Resume",
    path: "",
    icon: "file-download",
    label: "Télécharger le CV sous format PDF",
  },
  {
    name: "Email",
    path: "mailto:helios.wan@wareen.me",
    icon: "envelope",
    label: "Contacter par e-mail",
  },
];
</script>

<style scoped></style>
