<template>
  <p class="title">Nossos Planos</p>
  <div class="wrapper">
    <p class="preview">Preview dos planos ofertados</p>
    <Carousel :cards="cards" />
    <h2 class="pricing">Preços</h2>
    <div class="plans">
      <Plan
        title="Plano Mensal"
        price="R$ 0,00"
        :desc="desc[0]"
        planUrl="https://cic.unb.br"
        imgName="fruit.jpeg"
      />
      <Plan
        title="Plano Semestral"
        price="R$ 00,00"
        :desc="desc[1]"
        planUrl="https://cic.unb.br"
        imgName="fruit.jpeg"
      />
      <Plan
        title="Plano Mensal"
        price="R$ 000,00"
        :desc="desc[2]"
        planUrl="https://cic.unb.br"
        imgName="fruit.jpeg"
      />
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Plan from "../components/Plan.vue";

import diets from "../../public/assets/json/diets.json";
import exercises from "../../public/assets/json/exercises.json";

let desc = [
  "Cancele a qualquer momento",
  "15% de desconto",
  "Maior custo benefício",
];

export default {
  name: "Plans",
  components: {
    Carousel,
    Plan,
  },
  data() {
    return {
      desc,
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
          caption: `No topo (direita para esquerda), Maçã e Abacaxi. Embaixo, Mamão e Banana.
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
  gap: 20px;
}
</style>
