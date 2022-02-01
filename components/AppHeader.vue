<template>
  <header class="header">
    <nuxt-link to="/">
      <h1 class="title font-semibold text-primary text-xl md:text-2xl py-2">
        Dad Jokes
      </h1>
    </nuxt-link>
    <ul class="flex justify-around items-center">
      <li>
        <nuxt-link to="/" class="nav-link transition-prop"> Home </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/jokes" class="nav-link transition-prop">
          Jokes
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about" class="nav-link transition-prop">
          About
        </nuxt-link>
      </li>
    </ul>
    <DarkLightModeBtn />
  </header>
</template>

<script>
import DarkLightModeBtn from "~/components/_DarkLightModeBtn.vue";

export default {
  components: {
    DarkLightModeBtn,
  },
  name: "AppHeader",
};
</script>

<style scoped>
.header {
  @apply flex justify-between items-center mb-4 py-2 px-2 md:px-0 border-b border-gray-200;
}

.nav-link {
  @apply no-underline bg-primary text-white hover:bg-hover py-2 px-3 md:px-4 ml-2 cursor-pointer;
}
</style>
