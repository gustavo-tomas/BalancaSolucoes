<template>
  <div class="card">
    <img
      class="card-icon"
      :src="require(`../../public/assets/images/${imgName}`)"
      alt="card icon"
    />
    <div class="card-content">
      <h3 class="headline">{{ headline }}</h3>
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    headline: String,
    imgName: String,
    text: String,
  },
};
</script>

<style scoped>
.card {
  margin: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 50px 0 rgba(41, 67, 100, 0.21);
  width: 700px;
  height: 700px;
  padding: 10px;
}

.headline {
  font-weight: bold;
}

.card-icon {
  pointer-events: none;
  width: 500px;
  padding: 40px 20px 0px 20px;
}

.card-content {
  padding: 20px;
}

.text {
  text-align: start;
}
</style>
