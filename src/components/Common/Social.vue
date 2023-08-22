<template>
  <aside class="fixed w-full right-0 bottom-0 bg-white">
    <ul class="text-right">
      <li
        v-for="link in links"
        :key="link.name"
        class="text-[0.8rem] hover:text-orange-600 inline-block my-4 mx-8 ease-in-out duration-300"
      >
        <a target="_blank" :href="link.path">
          <unicon :name="link.icon" />
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const links = [
  { name: "Linkedin", path: "", icon: "linkedin" },
  { name: "Github", path: "", icon: "github" },
  { name: "Resume", path: "", icon: "file-download" },
];
</script>

<style scoped></style>
