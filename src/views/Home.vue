<template>
  <div class="home">
    <h1>Balança Soluções</h1>
  </div>
  <Methods />
  <Carousel />
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>
