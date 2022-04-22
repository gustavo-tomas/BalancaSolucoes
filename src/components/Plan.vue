<template>
  <a class="plan-url" :href="planUrl" target="_blank">
    <div
      class="plan"
      :style="{
        backgroundImage:
          'url(' + require(`../../public/assets/images/${imgName}`) + ')',
      }"
    >
      <p class="title">{{ title }}</p>
      <p class="price">{{ price }}</p>
      <p class="desc">{{ desc }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: "Plan",
  props: {
    title: String,
    price: String,
    desc: String,
    imgName: String,
    planUrl: String,
  },
};
</script>

<style scoped>
.plan {
  background-color: var(--color-dark-cyan);
  background-position: center;
  background-size: cover;
  opacity: 0.5;
  border-radius: 15px;
  height: 300px;
  width: 320px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  line-break: break-all;
  transition: all 0.5s;
}

.plan:hover {
  box-shadow: #a3c9bf 0px 5px, #b2dbd0 0px 10px, #c1ece1 0px 15px;
  padding-bottom: 100px;
  color: var(--color-primary-light);
  background-color: var(--color-darker-cyan);
  opacity: 1;
  transition: all 0.5s;
}

.title {
  font-size: 28px;
  margin-bottom: auto;
}

.price {
  font-size: 48px;
  color: gold;
}

.desc {
  font-size: 12px;
}

.plan-url {
  text-decoration: none;
  color: black;
}
</style>
