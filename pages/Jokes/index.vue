<template>
  <div>
    <SearchJokes @search-text="searchText" />
    <Joke
      v-for="joke in jokes"
      :key="joke.id"
      :id="joke.id"
      :joke="joke.joke"
    />
  </div>
</template>

<script>
import axios from "axios";
import Joke from "../../components/Joke.vue";
import SearchJokes from "../../components/SearchJokes.vue";

export default {
  components: {
    Joke,
  },
  data() {
    return {
      jokes: [],
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get("https://icanhazdadjoke.com/search", config);
      this.jokes = res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async searchText(text) {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };

      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        );
        this.jokes = res.data.results;
      } catch (e) {
        console.log(e);
      }
    },
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

<style></style>
