<template>
  <nuxt-link :to="'jokes/' + id">
    <div
      class="joke p-4 border border-gray-200 hover:bg-gray-100 dark:hover:text-black rounded my-2 transition-prop"
    >
      <p class="">{{ joke }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "Joke",
  props: ["joke", "id"],
};
</script>

<style></style>
