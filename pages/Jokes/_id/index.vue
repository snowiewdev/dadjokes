<template>
  <div>
    <h2 class="py-4 mb-4 text-semibold text-center">{{ joke }}</h2>
    <hr />
    <div class="flex justify-end align-center py-2">
      <small> Joke ID: {{ $route.params.id }}</small>
    </div>
    <BackLink link="/jokes" text="Back To Jokes" />
  </div>
</template>

<script>
import axios from "axios";
import BackLink from "~/components/BackLink.vue";

export default {
  components: {
    BackLink,
  },
  data() {
    return {
      joke: {},
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
        config
      );
      this.joke = res.data.joke;
      console.log(this.joke);
    } catch (e) {
      console.log(e);
    }
  },
  head() {
    return {
      title: this.joke,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.joke,
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  @apply no-underline bg-accent text-white py-2 px-3 md:px-4 ml-2 cursor-pointer;
}
</style>
