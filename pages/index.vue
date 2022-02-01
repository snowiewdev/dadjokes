<template>
  <div>
    <p class="py-2 mb-4">
      Welcome to dad jokes, a place either is full of laughs or absolute silence
    </p>
    <h2 class="text-black dark:text-secondary font-semibold">
      Random Joke of the day
    </h2>
    <Joke :joke="joke.joke" :id="joke.id" />
    <hr class="mt-6" />
    <BackLink link="/jokes" text="View More Jokes, lol" />
  </div>
</template>

<script>
import axios from "axios";
import Joke from "~/components/Joke.vue";
// import BackLink from "~/components/BackLink.vue";

export default {
  components: {
    Joke,
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
      const res = await axios.get("https://icanhazdadjoke.com/", config);
      this.joke = res.data;
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  },
  head() {
    return {
      title: "Dad Jokes",
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
