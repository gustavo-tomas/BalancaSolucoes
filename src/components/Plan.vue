<template>
  <div
    class="plan"
    :style="{
      backgroundImage: 'url(' + '../../public/assets/images/' + imgName + ')',
    }"
  >
    <p class="title">{{ title }}</p>
    <p class="price">{{ price }}</p>
    <p class="desc">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "Plan",
  props: {
    title: String,
    price: String,
    desc: String,
    imgName: String,
  },
};
</script>

<style scoped>
.plan {
  width: fit-content;
  background-color: var(--color-dark-cyan);
  opacity: 0.6;
  border-radius: 15px;
  height: 300px;
  width: 270px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  line-break: break-all;
}

.title {
  font-size: 28px;
  margin-bottom: auto;
}

.price {
  font-size: 48px;
  color: rgb(146, 85, 50);
}

.desc {
  font-size: 12px;
}
</style>
