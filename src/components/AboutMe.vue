<template>
  <section
    id="about"
    class="container mx-auto md:my-32 my-8 flex lg:flex-row flex-col gap-16 justify-center px-6"
  >
    <div
      class="lg:w-[30rem] w-full bg-slate-600 rounded-3xl lg:min-h-[80vh]"
    ></div>
    <div class="max-w-2xl py-4 flex flex-col">
      <div>
        <div class="flex justify-center gap-8 items-center mb-8">
          <hr class="grow border-b-2 rounded-full border-grey" />
          <h2 class="text-4xl font-extrabold border-grey">About me</h2>
          <hr class="grow border-b-2 rounded-full border-grey" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
          sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem
          ipsum dolor sit amet consecteturLorem ipsum dolor sit amet.
          <br />
          <br />
          consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
          amet consectetur
          <br />
          <br />
          Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
          consectetur Lorem ipsum dolor sit amet consecteturLorem :
        </p>
        <ul class="flex gap-2 rounded-sm flex-wrap mt-4 mb-6">
          <li v-for="competency in competencies" :key="competency">
            <Badge>{{ competency }}</Badge>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur :
        </p>
        <ul class="flex gap-2 rounded-sm flex-wrap mt-4 mb-6">
          <li v-for="competency in competencies" :key="competency">
            <Badge>{{ competency }}</Badge>
          </li>
        </ul>
      </div>
      <div class="mt-auto">
        <Button color="empty" label="Download my resume"
          >Download my resume</Button
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from "./Badge.vue";
import Button from "./Button.vue";

const competencies = [
  "JavaScript",
  "JavaScript",
  "JavaScript",
  "JavaScript",
  "JavaScript",
  "JavaScript",
];
</script>

<style lang="scss" scoped></style>
