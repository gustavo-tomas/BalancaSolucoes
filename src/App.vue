<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

document.title = "BalancaSolucoes";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sora&display=swap");

:root {
  --color-primary-white: #ffffff;
  --color-primary-light: #f7ede2;
  --color-primary-black: #000000;
  --color-dark-cyan: #84a59d;
  --color-darker-cyan: #617a74;
  --color-dark-gray: #2c3e50;
}

* {
  margin: 0px;
  padding: 0px;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-primary-light);
}

#app {
  padding-top: 90px;
  font-family: Sora, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
}

#app #nav {
  top: 0;
}
</style>
