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
</style>
