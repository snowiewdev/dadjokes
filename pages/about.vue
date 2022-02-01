<template>
  <div class="text-black dark:text-secondary">
    <h1 class="text-xl mb-4 text-primary">About DadJokes</h1>
    <p>
      This is an app that displays corny dad jokes, as well as for
      <span class="testing">testing</span>
      functions of nuxt.js and tailwind.css
    </p>
    <hr class="mt-6" />
    <BackLink link="/jokes" text="Checkout Jokes" />
  </div>
</template>

<script>
import BackLink from "~/components/BackLink.vue";

export default {
  components: {
    BackLink,
  },
  head() {
    return {
      title: "About Dad Jokes",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Dad Jokes is a place where you can find dad jokes",
        },
      ],
    };
  },
};
</script>

<style></style>
