<template>
  <div class="w-72 h-52 bg bg-slate-300 flex rounded-lg card overflow-hidden">
    <div
      class="mt-auto w-full p-3 bg-gradient-to-t from-black/70 to-white/0 text-white overflow-clip"
    >
      <h3 class="font-bold text-[0.8rem]">{{ props.title }}</h3>
      <p class="text-[0.8rem] mb-2">
        {{ props.shortDesc }}
      </p>
      <div class="links">
        <a
          class="text-[0.8rem] hover:text-white hover:border-orange-600 hover:bg-orange-600 ease-in-out duration-600 border-gray-200 border px-8 py-2"
          v-if="props.liveLink"
          :href="props.liveLink"
          >Live</a
        >
        <a
          class="text-[0.8rem] hover:text-white hover:border-orange-600 hover:bg-orange-600 ease-in-out duration-600 border-gray-200 border px-8 py-2"
          v-if="props.githubLink"
          :href="props.githubLink"
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
  shortDesc: {
    required: true,
    default: "Short desc",
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
