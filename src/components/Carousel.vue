<template>
  <div class="wrapper">
    <SplitCarousel v-bind="option">
      <SplitCarouselItem v-for="item in itemAmount" :key="item">
        <a class="box" href="https://github.com/gustavo-tomas">
          <img class="box" :src="item.img" />
        </a>
      </SplitCarouselItem>
    </SplitCarousel>
  </div>
</template>

<script>
const defaultConfig = {
  displayAmount: 1,
  autoplay: true,
  speed: 5000,
  interval: 3000,
  loop: true,
  height: 318,
  itemWidth: 658,
  pauseOnHover: true,
  timingFunction: "ease",
  arrowVisible: "default",
};

export default {
  name: "App",
  props: {
    images: Array,
  },
  data() {
    return {
      itemAmount: this.images,
      option: { ...defaultConfig },
    };
  },
};
</script>

<style>
.wrapper {
  width: 800px;
  margin: 0 auto;
}

.box {
  border-radius: 30px;
  border: 1px solid #eee;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
