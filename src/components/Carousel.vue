<template>
  <div class="card-carousel">
    <ArrowButton
      arrowType="left"
      @click="showPrevElement"
      :disabled="this.reachedMaxLeft"
    />
    <Card
      class="current-element"
      :headline="currentElement.headline"
      :text="currentElement.text"
      :caption="currentElement.caption"
      :imgName="currentElement.imgName"
      :imgUrl="currentElement.imgUrl"
    />
    <ArrowButton
      arrowType="right"
      @click="showNextElement"
      :disabled="this.reachedMaxRight"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";
import ArrowButton from "./ArrowButton.vue";

export default {
  name: "Carousel",
  props: { cards: Array },
  components: { Card, ArrowButton },
  data() {
    return {
      currentElementIndex: 0,
    };
  },
  computed: {
    currentElement() {
      return this.cards[this.currentElementIndex];
    },
    reachedMaxLeft() {
      return this.currentElementIndex === 0;
    },
    reachedMaxRight() {
      return this.currentElementIndex === this.cards.length - 1;
    },
  },
  methods: {
    showNextElement() {
      this.currentElementIndex++;
    },
    showPrevElement() {
      this.currentElementIndex--;
    },
    showElement(elementIndex) {
      this.currentElementIndex = elementIndex;
    },
  },
};
</script>

<style scoped>
.card-carousel {
  display: flex;
  align-items: center;
  width: fit-content;
  margin: auto;
  margin-bottom: 30px;
}

.btn {
  height: 90px;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.5;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  .btn {
    display: none;
  }
}

.btn:focus {
  outline: none;
}

.btn:hover {
  opacity: 0.7;
}

.btn:disabled {
  opacity: 0.2;
  cursor: default;
}
</style>
