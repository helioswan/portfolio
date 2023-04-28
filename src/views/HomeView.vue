<script setup>
import AboutMe from "../components/AboutMe.vue";
import Hero from "../components/Hero.vue";
import MyWork from "../components/MyWork.vue";
</script>

<template>
  <Hero />
  <div class="relative py-16">
    <img
      src="/src/assets/img/bg-section.svg"
      alt=""
      class="object-cover object-top absolute z-[-1] w-full h-full top-0 left-0"
    />
    <AboutMe />
    <MyWork />
  </div>
</template>
