<template>
  <p class="title">Nossos Planos</p>
  <div class="wrapper">
    <p class="preview">Preview dos planos ofertados</p>
    <Carousel :cards="cards" />
    <h2 class="pricing">Preços</h2>
    <div class="plans">
      <Plan
        title="Plano Mensal"
        price="R$ 9,90"
        :desc="descMonth"
        imgName="abacaxi.png"
      />
      <Plan
        title="Plano Semestral"
        price="R$ 49,90"
        :desc="descSems"
        imgName="suco.png"
      />
      <Plan
        title="Plano Mensal"
        price="R$ 99,90"
        :desc="descAnual"
        imgName="abacaxi.png"
      />
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Plan from "../components/Plan.vue";

import diets from "../../public/assets/json/diets.json";
import exercises from "../../public/assets/json/exercises.json";

let descMonth = "Cancele a qualquer momento";
let descSems = "15% de desconto";
let descAnual = "Melhor preço";

export default {
  name: "Plans",
  components: {
    Carousel,
    Plan,
  },
  data() {
    return {
      descMonth,
      descSems,
      descAnual,
      cards: [
        {
          headline: "Exercícios para ganhar massa muscular",
          text: exercises.muscle,
          caption: "John Doe, medalhista olímpico em flexões",
          imgName: "exercicio-flexao.png",
          imgUrl:
            "https://www.tuasaude.com/treino-de-hipertrofia-para-ganhar-massa-muscular/",
        },
        {
          headline: "Dieta para ganhar massa muscular",
          text: diets.muscle,
          caption: `No topo (direita para esquerda), Manga e Abacaxi. Embaixo, Mamão e Banana.
                    Foto tirada momentos antes do acidente.`,
          imgName: "abacaxi.png",
          imgUrl:
            "https://www.tuasaude.com/dieta-para-aumentar-a-massa-muscular/",
        },
        {
          headline: "Dieta para emagrecer",
          text: diets.thin,
          caption: `Nem tem milho nessa dieta.`,
          imgName: "vegana3.png",
          imgUrl: "https://www.tuasaude.com/dieta-para-emagrecer/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: fit-content;
}

.title {
  font-size: 64px;
  margin: 30px 0px;
}

.preview {
  font-size: 14px;
  font-style: italic;
  color: gray;
}

.pricing {
  margin: 20px auto;
}

.plans {
  display: inline-grid;
  justify-content: center;
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}
</style>
