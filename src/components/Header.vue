<template>
  <header class="bg-white fixed w-full left-0 top-0">
    <ul class="text-right container mx-auto">
      <li
        v-for="link in links"
        :key="link.name"
        class="text-[0.8rem] hover:text-orange-600 inline-block m-8 ease-in-out duration-300"
      >
        <router-link :to="link.path"> {{ link.name }} </router-link>
      </li>
      <li class="inline-block my-6">
        <router-link
          to="contact"
          class="text-[0.8rem] hover:text-white hover:border-0 hover:bg-orange-600 ease-in-out duration-300 border-gray-200 border px-8 py-2"
        >
          Contact
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script setup>
const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "resume" },
  { name: "Portfolio", path: "portfolio" },
  //   { name: "Contact", path: "contact" },
];
</script>

<style scoped></style>
