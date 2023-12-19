<template>
  <div
    class="w-72 h-[11.25rem] flex rounded-lg card overflow-hidden relative border shadow-lg"
  >
    <img
      :src="`/assets/thumbnails/${props.imgUrl}`"
      alt=""
      class="absolute top-0 left-0 w-full h-full z-[-1]"
    />
    <div
      class="mt-auto w-full p-3 bg-gradient-to-t from-black to-gray-50/0 text-white overflow-clip"
    >
      <h3 class="font-bold text-[0.8rem]">{{ props.title }}</h3>
      <p class="text-[0.8rem] mb-2">
        {{ props.desc }}
      </p>
      <div class="links">
        <a
          class="text-[0.8rem] hover:text-white hover:border-orange-600 hover:bg-orange-600 ease-in-out duration-600 border-gray-200 border px-8 py-2"
          v-if="props.liveLink"
          :href="props.liveLink"
          target="_blank"
          >Live</a
        >
        <a
          class="text-[0.8rem] hover:text-white hover:border-orange-600 hover:bg-orange-600 ease-in-out duration-600 border-gray-200 border px-8 py-2"
          v-if="props.githubLink"
          :href="props.githubLink"
          target="_blank"
          >Github</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    required: true,
    default: "Title",
    type: String,
  },
  desc: {
    required: true,
    default: "Desc",
    type: String,
  },
  imgUrl: {
    required: true,
    default: "",
    type: String,
  },
  liveLink: {
    required: true,
    default: "",
    type: String,
  },
  githubLink: {
    required: true,
    default: "",
    type: String,
  },
});
</script>

<style scoped>
.card:hover .links {
  @apply flex gap-4 mt-2;
}

.links {
  display: none;
}
</style>
