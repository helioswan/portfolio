<template>
  <div class="flex lg:flex-row flex-col lg:gap-16 gap-8">
    <div
      class="lg:basis-1/2 basis-full order-1"
      :class="{ 'lg:order-2': props.reverse }"
    >
      <a
        :href="props.live"
        :aria-label="'Lien vers le site en ligne du projet ' + props.title"
        target="_blank"
      >
        <img
          :src="'/src/assets/img/thumbnails/' + props.img"
          alt=""
          class="rounded-xl shadow-lg"
        />
      </a>
    </div>
    <div
      class="lg:basis-1/2 basis-full flex flex-col order-2"
      :class="{ 'lg:order-1': props.reverse }"
    >
      <div>
        <h3 class="font-bold text-4xl text-primary mb-4">{{ props.title }}</h3>
        <p class="text-xl">
          {{ props.desc }}
        </p>
      </div>
      <ul class="flex gap-2 rounded-sm flex-wrap mt-4 mb-6">
        <li v-for="badge in props.badges" :key="badge">
          <Badge>{{ badge }}</Badge>
        </li>
      </ul>
      <ul class="mt-auto flex flex-row flex-wrap gap-4">
        <li v-if="props.github">
          <Button
            :href="props.github"
            :alt="'Lien vers le github du projet ' + props.title"
            target="_blank"
          >
            <div class="flex gap-2 flex-row justify-center items-center">
              <unicon
                name="github"
                fill="white"
                icon-style="monochrome"
                width="24"
                height="24"
                class="m-auto"
              ></unicon>
              <div class="m-auto">Github</div>
            </div>
          </Button>
        </li>
        <li v-if="props.live">
          <Button
            :href="props.live"
            :label="'Lien vers le site en ligne du projet ' + props.title"
            target="_blank"
          >
            <div class="flex gap-2 flex-row justify-center items-center">
              <unicon
                name="external-link-alt"
                fill="white"
                icon-style="line"
                width="24"
                height="24"
              ></unicon>
              <div class="m-auto">See live</div>
            </div>
          </Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Badge from "./Badge.vue";
import Button from "./Button.vue";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  desc: {
    required: true,
    type: String,
  },
  img: {
    required: true,
    type: String,
  },
  github: {
    required: false,
    type: String,
  },
  live: {
    required: false,
    type: String,
  },
  badges: {
    required: false,
    type: Array,
  },
  reverse: {
    required: false,
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
