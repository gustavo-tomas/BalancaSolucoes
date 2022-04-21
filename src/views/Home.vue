<template>
  <div class="home">
    <p class="subtitle">Soluções leves para Pessoas pesadas</p>
  </div>
  <div class="values">
    <Value
      valueName="Valores"
      valueDescription="Acreditamos que  um estilo de vida saudável deve ser acessível a todas as pessoas"
      valueColor="#B7E4C7"
    />
    <Value
      valueName="Exercícios"
      valueDescription="Exercícios físicos para todas as pessoas de todos os níveis"
      valueColor="#F28482"
    />
    <Value
      valueName="Dietas"
      valueDescription="Receitas saborosas e pouco calóricas"
      valueColor="#F6BD60"
    />
  </div>
</template>

<script>
import Value from "../components/Value.vue";

export default {
  name: "Home",
  components: {
    Value,
  },
};
</script>

<style scoped>
/*mobile: 450,
tablet: 900,
desktop: 1250,*/

@media only screen and (min-width: 300px) and (max-width: 849px) {
  .home {
    background-image: url("../../public/assets/images/banner.png");
    background-repeat: no-repeat;
    background-position: center center;
    /*background-attachment: fixed;*/
    background-size: cover;
    height: 250px;
  }
  .subtitle {
    width: 250px;
    font-size: 25px;
    margin: auto;
    padding-top: 90px;
    height: 100%;
  }
  .values {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    width: auto;
  }
}

@media only screen and (min-width: 850px) and (max-width: 1199px) {
  .home {
    height: 800px;
    background-image: url("../../public/assets/images/banner.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .subtitle {
    width: 400px;
    font-size: 80px;
    margin: auto;
    padding-top: 150px;
    height: 100%;
  }
  .values {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    width: auto;
  }
}

@media only screen and (min-width: 1200px) {
  .home {
    height: 710px;
    background-image: url("../../public/assets/images/banner.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .subtitle {
    width: 500px;
    font-size: 80px;
    margin: auto;
    padding-top: 150px;
    height: 100%;
  }
  .values {
    display: flex;
    justify-content: center;
    margin: 50px auto;
    width: auto;
  }
}
</style>
