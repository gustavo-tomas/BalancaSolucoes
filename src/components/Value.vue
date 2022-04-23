<template>
  <div class="value" :style="{ backgroundColor: valueColor }">
    <div class="value-name">
      <h3>{{ valueName }}</h3>
    </div>
    <hr />
    <div class="value-description">
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
@media only screen and (min-width: 300px) and (max-width: 849px) {
  .value {
    border-radius: 75px;
    margin: 30px;
    padding: 90px 40px;
    width: 200px;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .value-name {
    font-size: 20px;
  }
  .value-description {
    line-height: 1cm;
    font-size: 18px;
  }
  hr {
    border: 1px dashed rgba(0, 0, 0, 0.493);
    width: 200px;
    margin: 30px auto 30px auto;
  }
}

@media only screen and (min-width: 850px) and (max-width: 1199px) {
  .value {
    border-radius: 75px;
    margin: 30px;
    padding: 90px 40px;
    width: 300px;
    height: 500px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .value-name {
    font-size: 32px;
  }
  .value-description {
    line-height: 1.5cm;
    font-size: 24px;
  }
  hr {
    border: 1px dashed rgba(0, 0, 0, 0.493);
    width: 250px;
    margin: 30px auto 30px auto;
  }
}

@media only screen and (min-width: 1200px) {
  .value {
    border-radius: 75px;
    margin: 30px;
    padding: 90px 40px;
    width: 300px;
    height: 500px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .value-name {
    font-size: 32px;
  }
  .value-description {
    line-height: 1.5cm;
    font-size: 24px;
  }
  hr {
    border: 1px dashed rgba(0, 0, 0, 0.493);
    width: 250px;
    margin: 30px auto 30px auto;
  }
}
</style>
