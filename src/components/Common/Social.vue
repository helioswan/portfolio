<template>
  <aside class="fixed right-0 bottom-0 bg-white">
    <ul class="text-right">
      <li
        v-for="link in links"
        :key="link.name"
        class="text-[0.8rem] my-6 mx-8"
      >
        <a target="_blank" :href="link.path">
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
    icon: "linkedin",
  },
  { name: "Github", path: "https://github.com/helioswan", icon: "github" },
  { name: "Resume", path: "", icon: "file-download" },
  { name: "Email", path: "mailto:helios.wan@wareen.me", icon: "envelope" },
];
</script>

<style scoped></style>
