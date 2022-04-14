<template>
  <div class="home">
    <h1>Balança Soluções</h1>
  </div>
  <Carousel />
  <Value valueName="nome" valueDescription="desc" valueColor="#d0d0d0" />
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Value from "../components/Value.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Value,
  },
};
</script>

<style scoped>
.home {
  height: 710px;
  background-image: url("../../public/assets/banner.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
