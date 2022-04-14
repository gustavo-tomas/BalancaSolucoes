<template>
  <div class="plan">
    <p class="item-name">{{ itemName }}</p>
    <p class="item-description">{{ itemDescription }}</p>
  </div>
</template>

<script>
export default {
  name: "Plan",
  props: {
    itemName: String,
    itemDescription: String,
  },
  components: {},
};
</script>

<style scoped>
.plan {
  background-color: var(--color-light-red);
  border-radius: 25px;
  color: black;
  width: 700px;
  margin: 10px auto;
  padding: 40px;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.item-name {
  background-color: red;
  margin-bottom: 20px;
}

.item-description {
  background-color: green;
}
</style>
