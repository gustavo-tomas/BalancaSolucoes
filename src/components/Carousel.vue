<!-- This is a single method -->
<template>
  <div class="carousel">
    <Carousel />
    <Slide />
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
// export default {
//   name: "MethodCard",
//   props: {
//     methodName: String,
//   },
//   components: {},

export default {
  name: "Carousel",
  components: {
    Carousel,
    Slide,
  }
};
</script>

<style scoped>
.carousel {
  margin: auto;
  /* This values are just placeholders */
  width: 200px;
  height: 200px;
  /* This values are just placeholders */
  background-color: #3d405d;
  border-radius: 10px;
  color: white;
}
</style>
