<template>
  <div class="testimony">
    <img
      :src="require(`../../public/assets/images/${testImg}`)"
      class="testimony-image"
    />
    <div class="name-text">
      <p class="name">{{ testName }}</p>
      <p class="role">{{ testRole }}</p>
      <!-- Fill checked starts -->
      <span
        class="fa fa-star star-checked"
        v-for="index in testRating"
        :key="index"
      />
      <!-- Fill unchecked starts -->
      <span
        class="fa fa-star star-unchecked"
        v-for="index in 5 - testRating"
        :key="index"
      />
      <p class="text">{{ testText }}</p>
      <p class="disclamer">{{ testDiscl }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimony",
  props: {
    testName: String,
    testRole: String,
    testRating: Number,
    testImg: String,
    testText: String,
    testDiscl: String,
  },
};
</script>

<style scoped>
.testimony {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 250px;
}

.name-text {
  text-align: left;
  margin: 20px;
}

.testimony-image {
  height: 100%;
  border-radius: 15px;
  background-color: #f28482;
}

.name {
  font-size: 28px;
}

.role {
  /* To align role to name a little better */
  margin-left: 2px;
}

.text {
  text-align: left;
}

.fa-star {
  margin: 10px 2px;
}

.star-checked {
  color: orange;
}

.star-unchecked {
  color: rgb(51, 51, 51);
}

.disclamer {
  font-size: 12px;
  align-self: flex-start;
  color: gray;
  margin-top: 5px;
}
</style>
