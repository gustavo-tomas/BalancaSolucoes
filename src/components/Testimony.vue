<template>
  <div class="testimony">
    <p>{{ testName }}</p>
    <img
      :src="require(`../../public/assets/images/${testImg}`)"
      class="testimony-image"
    />
  </div>
</template>

<script>
export default {
  name: "Testimony",
  props: {
    testName: String,
    testImg: String,
  },
};
</script>

<style>
.testimony {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  width: 300px;
  height: 150px;
  background-color: red;
}

.testimony-image {
  width: 100px;
  height: 100px;
  border-radius: 15px;
}
</style>
