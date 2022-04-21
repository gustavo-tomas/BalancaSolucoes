<template>
  <p class="title">O que dizem sobre nós</p>
  <Testimony testName="Pelé" testImg="abacaxi.png" />
</template>

<script>
import Testimony from "../components/Testimony.vue";

export default {
  name: "Testimonies",
  components: {
    Testimony,
  },
};
</script>

<style>
.title {
  font-size: 64px;
  margin: 30px 0px;
}
</style>
