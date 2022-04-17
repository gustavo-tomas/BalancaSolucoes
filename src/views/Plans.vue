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

import img1 from "../../public/assets/images/abacaxi.png";
import img2 from "../../public/assets/images/pizza 1.png";
import img3 from "../../public/assets/images/vegana 3.png";
import img4 from "../../public/assets/images/suco.png";
import img5 from "../../public/assets/images/abacaxi.png";

import diets from "../../public/assets/json/diets.json";
import exercises from "../../public/assets/json/exercises.json";

const images = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
];

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
