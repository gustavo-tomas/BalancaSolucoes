<template>
  <div class="card">
    <figure>
      <a :href="imgUrl" target="_blank">
        <img
          class="card-icon"
          :src="require(`../../public/assets/images/${imgName}`)"
          alt="card icon"
        />
        <figcaption class="caption">{{ caption }}</figcaption>
      </a>
    </figure>
    <div class="card-content">
      <h3 class="headline">{{ headline }}</h3>
      <textarea class="text" :value="text" disabled></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    headline: String,
    imgName: String,
    imgUrl: String,
    text: String,
    caption: String,
  },
};
</script>

<style scoped>
a {
  color: inherit;
}

.card {
  margin: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 50px 0 rgba(41, 67, 100, 0.21);
  width: 700px;
  height: 780px;
  padding: 10px;
}

.headline {
  font-weight: bold;
  margin-bottom: 10px;
}

.card-icon {
  pointer-events: none;
  width: 500px;
  padding: 40px 20px 0px 20px;
}

.card-content {
  padding: 20px;
}

.caption {
  font-size: 12px;
  color: rgb(105, 105, 105);
  margin: auto;
  max-width: 450px;
  height: 32px;
}

.text {
  text-align: start;
  width: 600px;
  height: 320px;
  padding: 30px;
  resize: none;
  background-color: rgba(185, 185, 185, 0.233);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-family: inherit;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.856);
  overflow-wrap: break-word;
}

::-webkit-scrollbar {
  display: none;
}
</style>
