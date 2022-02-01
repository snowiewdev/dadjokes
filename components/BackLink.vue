<template>
  <div>
    <div class="flex justify-center align-center py-2 mt-4">
      <nuxt-link :to="link"> {{ text }} </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackLink",
  props: {
    text: {
      type: String,
      default: "Back To Home",
    },
    link: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style scoped>
a {
  @apply no-underline bg-primary text-white py-2 px-3 md:px-4 ml-2 cursor-pointer;
}
</style>
