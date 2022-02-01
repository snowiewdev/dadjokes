<template>
  <div class="flex mb-4">
    <input
      type="text"
      v-model="text"
      placeholder="Search for a corny joke"
      class="grow p-2 border border-gray-200"
    />
    <input
      type="submit"
      value="Search Jokes"
      @click.prevent="onSumbit"
      class="bg-primary text-white border border-primary hover:bg-white hover:text-primary py-2 px-4 ml-2 cursor-pointer transition-prop"
    />
  </div>
</template>

<script>
export default {
  name: "SearchJokes",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onSumbit() {
      this.$emit("search-text", this.text);
      this.text = "";
    },
  },
};
</script>

<style></style>
