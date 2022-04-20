<template>
  <p class="title">Nosso Planos</p>
  <Carousel :cards="cards" />
</template>

<script>
import Carousel from "../components/Carousel.vue";

import diets from "../../public/assets/json/diets.json";
import exercises from "../../public/assets/json/exercises.json";

const muscle_exercise = exercises.muscle;
const muscle_diet = diets.muscle;

export default {
  name: "Plans",
  components: {
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
          caption: "John Doe, medalhista olímpico em flexões",
          imgName: "exercicio-flexao.png",
          imgUrl:
            "https://www.tuasaude.com/treino-de-hipertrofia-para-ganhar-massa-muscular/",
        },
        {
          headline: "Dieta para ganhar massa muscular",
          text: muscle_diet,
          caption: `No topo (direita para esquerda), Manga e Abacaxi. Embaixo, Mamão e Banana.
                    Foto tirada momentos antes do acidente.`,
          imgName: "abacaxi.png",
          imgUrl:
            "https://www.tuasaude.com/dieta-para-aumentar-a-massa-muscular/",
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
