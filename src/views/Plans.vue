<template>
  <p class="title">Planos de Dieta</p>
  <Carousel :images="images" />
  <div class="plans">
    <Plan itemName="Dietas" :itemDescription="muscle_diet" />
    <Plan itemName="Exercício" :itemDescription="muscle_exercise" />
  </div>
</template>

<script>
import Plan from "../components/Plan.vue";
import Carousel from "../components/Carousel.vue";

import diets from "../../public/assets/json/diets.json";
import exercises from "../../public/assets/json/exercises.json";

// list with all images of carousel
const images_array = require("../../public/assets/images/images.json");

var images = [];
images_array.forEach((image) => {
  images.push({ img: require(`../../public/assets/images/${image}`) });
});

console.log(images);

export default {
  name: "Plans",
  components: {
    Plan,
    Carousel,
  },
  data() {
    return {
      muscle_exercise,
      muscle_diet,
      images,
    };
  },
};

// https://www.tuasaude.com/dieta-para-aumentar-a-massa-muscular/
const muscle_exercise = exercises.muscle;

// https://www.tuasaude.com/treino-de-hipertrofia-para-ganhar-massa-muscular/
const muscle_diet = diets.muscle;
</script>

<style>
.title {
  font-size: 64px;
  margin: 30px 0px;
}

.wrapper {
  width: 800px;
  margin: 0 auto;
}

.box {
  border: 1px solid #eee;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.operator {
  padding: 30px 0;
}

.code {
  margin: 0;
}

details {
  padding: 25px 0 0 10px;
}
</style>
