<template>
  <div class="container md:container mx-auto">
    <AppHeader />
    <div class="">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

body {
  @apply bg-gray-100;
}

body.dark {
  background: #353535 !important;
}

.container {
  @apply bg-white dark:bg-black md:my-3 md:py-3 min-h-screen;
}
</style>
