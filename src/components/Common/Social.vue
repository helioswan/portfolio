<template>
  <aside class="fixed w-full right-0 bottom-0">
    <ul class="text-right">
      <li
        v-for="link in links"
        :key="link.name"
        class="text-[0.8rem] hover:text-orange-600 inline-block m-8 ease-in-out duration-300"
      >
        <router-link :to="link.path"> {{ link.name }} </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const links = [
  { name: "Linkedin", path: "", icon: "" },
  { name: "Github", path: "", icon: "" },
  { name: "Resume", path: "", icon: "" },
];
</script>

<style scoped></style>
