<template>
  <div class="container mx-auto flex justify-between flex-wrap">
    <div class="basis-1/2">
      <h1 class="text-primary text-8xl font-bold mb-6">
        Hi !<br />
        I’m Hélios,
      </h1>
      <p class="text-black text-2xl mb-6">
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
        consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
        amet consectetur
      </p>
      <div class="flex gap-6">
        <Button>See my work</Button>
        <Button variant="secondary">Download my resume</Button>
      </div>
    </div>
    <div class="basis-1/2">
      <h1 class="text-primary text-8xl font-bold">
        Hi !<br />
        I’m Hélios,
      </h1>
      <p class="text-black text-2xl">
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
        consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
        amet consectetur
      </p>
      <Button>See my work</Button>
      <Button variant="secondary">See my work</Button>
    </div>
    <img
      alt="Section suivante"
      src="../assets/img/cross.svg"
      class="transition-transform hover:scale-125"
    />
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
</script>

<style lang="scss" scoped></style>
