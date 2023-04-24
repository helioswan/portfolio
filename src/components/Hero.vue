<template>
  <div class="container mx-auto min-h-screen flex flex-col">
    <div class="flex flex-row my-auto">
      <div class="basis-1/2 my-auto">
        <h1 class="text-primary text-8xl font-bold mb-6">
          Hi !<br />
          I’m Hélios,
        </h1>
        <p class="text-black text-2xl mb-6">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
          sit amet consectetur
        </p>
        <div class="flex gap-6">
          <Button>See my work</Button>
          <Button color="empty">Download my resume</Button>
        </div>
      </div>
      <div class="basis-1/2">
        <img alt="" src="../assets/img/blob.svg" class="m-auto" />
      </div>
    </div>
    <img
      alt="Section suivante"
      src="../assets/img/cross.svg"
      class="transition-transform hover:scale-125 ease-in-out duration-200 mx-auto mb-2"
    />
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
</script>

<style lang="scss" scoped></style>
