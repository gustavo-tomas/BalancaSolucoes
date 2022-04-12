<template>
  <div class="home">
    <h1>Vue Numerical Calculator</h1>
  </div>
  <Methods />
  <Carousel />
</template>

<script>
import Methods from "../components/Methods.vue";
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Methods,
  },
};
</script>
