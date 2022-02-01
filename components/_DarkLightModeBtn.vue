<template>
  <div
    class="switch bg-gray-200 p-2 dark:bg-white shadow-md cursor-pointer transition-prop"
    @click="toggleDarkMode"
  >
    <img
      v-if="isDarkMode"
      src="https://s.svgbox.net/hero-outline.svg?ic=sun&fill=f6ad55"
      class="switch-sun"
      width="30"
      height="30"
    />
    <img
      v-else
      src="https://s.svgbox.net/hero-outline.svg?ic=moon&fill=f6ad55"
      class="switch-moon"
      width="30"
      height="30"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    // this.setDarkModePreferenceInUser();
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark");
      this.isDarkMode
        ? (localStorage.theme = "dark")
        : (localStorage.theme = "light"); // update system preference
    },
    setDarkModePreferenceInUser() {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "light";
        this.isDarkMode = true;
        return;
      }

      document.documentElement.classList.remove("dark");
    },
  },
};
</script>

<style scoped>
.switch {
  position: fixed;
  z-index: 100;
  bottom: 1.5rem;
  right: 1rem;
  border-radius: 50%;
}
</style>
