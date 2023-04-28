<template>
  <section class="container mx-auto min-h-screen flex flex-col px-6" id="hero">
    <div class="flex lg:flex-row flex-col my-auto gap-4">
      <div class="lg:basis-1/2 basis-full my-auto lg:order-1 order-2">
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
          <Button label="Go to my work section" href="#mywork">See my work</Button>
          <Button color="empty" label="Download my resume"
            >Download my resume</Button
          >
        </div>
      </div>
      <div class="lg:basis-1/2 basis-full lg:order-2 order-1">
        <img alt="" src="../assets/img/blob.svg" class="m-auto" />
      </div>
    </div>
    <a href="#about">
      <img
        alt="Section suivante"
        src="../assets/img/cross.svg"
        class="transition-transform hover:scale-125 ease-in-out duration-200 mx-auto mb-2"
      />
      <v-icon name="fa-flag" />
      <v-icon name="ri-zhihu-fill" />
    </a>
  </section>
</template>

<script setup>
import Button from "../components/Button.vue";
</script>

<style lang="scss" scoped></style>
