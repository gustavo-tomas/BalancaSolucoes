<template>
  <p class="title">Nosso Planos</p>
  <Carousel :cards="cards" />
  <Diet :text="muscle_diet" />
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Diet from "../components/Diet.vue";

import diets from "../../public/assets/json/diets.json";
import exercises from "../../public/assets/json/exercises.json";

// https://www.tuasaude.com/treino-de-hipertrofia-para-ganhar-massa-muscular/
const muscle_exercise = exercises.muscle;

// https://www.tuasaude.com/dieta-para-aumentar-a-massa-muscular/
const muscle_diet = diets.muscle;

for (let item in muscle_diet) {
  console.log(item);
}

export default {
  name: "Plans",
  components: {
    Diet,
    Carousel,
  },
  data() {
    return {
      muscle_exercise,
      muscle_diet,
      cards: [
        {
          headline: "Exercícios para ganhar massa muscular",
          text: muscle_exercise,
          imgName: "exercicio-flexao.png",
        },
        {
          headline: "Dieta para ganhar massa muscular",
          text: muscle_diet,
          imgName: "abacaxi.png",
        },
      ],
    };
  },
};
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
