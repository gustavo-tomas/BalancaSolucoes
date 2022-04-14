<template>
  <div class="value">
    <div class="value-name">
      <h3>{{ valueName }}</h3>
    </div>
    <hr />
    <div>
      <p>{{ valueDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Value",
  props: {
    valueName: String,
    valueDescription: String,
    valueColor: String,
  },
};
</script>

<style scoped>
.value {
  background-color: valueColor;
  margin: auto;
  width: 600px;
  height: 700px;
}
</style>
