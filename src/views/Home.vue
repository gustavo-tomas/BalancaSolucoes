<template>
  <div class="home">
    <p class="subtitle">Soluções leves para Pessoas pesadas</p>
  </div>
  <Value valueName="nome" valueDescription="desc" valueColor="#d0d0d0" />
</template>

<script>
import Value from "../components/Value.vue";

export default {
  name: "Home",
  components: {
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

.subtitle {
  width: 500px;
  font-size: 80px;
  margin: auto;
  padding-top: 150px;
  height: 100%;
}
</style>
