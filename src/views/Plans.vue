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
import img1 from "../../public/assets/abacaxi.png";
import img2 from "../../public/assets/pizza 1.png";
import img3 from "../../public/assets/vegana 3.png";
import img4 from "../../public/assets/suco.png";
import img5 from "../../public/assets/abacaxi.png";

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
const muscle_exercise = `
Os exercícios desse plano devem ser feitos pelo menos duas vezes por semana.
Além disso, cada exercício deve ser realizado 2 vezes por cerca de 30 segundos
e o descanso deve ser de 15 segundos. Entre cada grupo de exercícios, o tempo de descanso
também deve ser de 15 segundos, com exceção dos exercícios para tríceps, em que o intervalo
de descanso deve ser de 30 segundos.

Aquecimento (30s - 60s): pular corda, polichinelo

Peitoral e braços
1. Flexão tradicional (30s)
2. Flexão estática (30s)
Repetir a série e passar pro próximo grupo

Glúteos
1. Agachamento tradicional (30s)
2. Agachamento estático (30s)
Repetir a série e passar pro próximo grupo

Perna
1. Lunges alternados (30s)
2. Lunges estáticos (30s)
Repetir a série e alternar a perna para o lunge estático

Tríceps
1. Tríceps com cadeira (30s)
2. Tríceps estático (30s)
Repetir a série e dar uma pausa de 30s antes de passar para o próximo

Panturrilha
1. Elevação da panturrilha (30s)
2. Panturrilha estática (30s)
Repetir a série e passar para o próximo grupo

Abdominal
1. Abdominal tocando o pé (30s)
2. Abdominal estático (30s)
Repetir a série e passar para o próximo grupo

Abdominal lateral
1. Prancha lateral (30s)
2. Prancha lateral estática (30s)
Repetir a série e alternar o lado para a prancha

Costas
1. Posição super homem (30s)
2. Posição super homem estático (30s)
Repetir a série e passar pro alongamento

Alongamento (30s)`;

// https://www.tuasaude.com/treino-de-hipertrofia-para-ganhar-massa-muscular/

// async function getJSON(path) {
//   const response = await fetch(path);
//   const json = await response.json();
//   return json;
// }

const muscle_diet = fetch("../../public/assets/json/diets.json").then(
  (response) => {
    return response.json();
  }
);

console.log(muscle_diet);
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
