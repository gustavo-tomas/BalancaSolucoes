<!-- This is where all methods cards are contained -->
<template>
  <h2>This is a component to contain the methods</h2>
  <div class="methods">
    <MethodCard methodName="Hi!" />
    <MethodCard methodName="I" />
    <MethodCard methodName="am" />
    <MethodCard methodName="a" />
    <MethodCard methodName="Method" />
    <MethodCard methodName="Card" />
  </div>
</template>

<script>
import MethodCard from "./MethodCard.vue";

export default {
  name: "Methods",
  components: {
    MethodCard,
  },
};
</script>

<style scoped>
.methods {
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  /* This values are just placeholders */
  width: 1000px;
  height: 700px;
  /* This values are just placeholders */
  border-radius: 10px;
  border: 1px solid rgb(226, 100, 100);
}
</style>
