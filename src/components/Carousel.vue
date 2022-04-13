<template>
  <mdb-carousel :interval="8000">
    <mdb-carousel-item
      img
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp"
      alt="First slide"
    />
    <mdb-carousel-item
      img
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp"
      alt="Second slide"
    />
    <mdb-carousel-item
      img
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp"
      alt="Third slide"
    />
  </mdb-carousel>
</template>

<script>
import { mdbCarousel, mdbCarouselItem } from "mdbvue";
export default {
  name: "CarouselPage",
  components: {
    mdbCarousel,
    mdbCarouselItem,
  },
};
</script>
