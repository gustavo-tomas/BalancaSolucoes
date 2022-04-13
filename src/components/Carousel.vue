<!-- This is a single method -->
<template>
  <div>
    <Carousel :scrollPerPage="false" buildSlideMarkup(10)>' </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
// import VueCarousel from "vue-carousel";
// import VueCarousel from "vue-carousel";

export default {
  function: function buildSlideMarkup(count) {
    let slideMarkup;
    for (let i = 1; i <= count; i++) {
      slideMarkup += (
        <Slide>
          <span class="label">' + i + '</span>
        </Slide>
      );
    }
    return slideMarkup;
  },

  components: {
    Carousel,
    // Slide,
  },
};
</script>

<style scoped>
.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
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
