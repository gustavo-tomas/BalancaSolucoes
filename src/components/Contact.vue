<template>
  <div class="contact">
    <a class="contact-link" :href="contactUrl" target="_blank">
      <div
        class="contact-pic"
        :style="{ backgroundImage: 'url(' + contactPic + ')' }"
      ></div>
    </a>
    <div class="contact-name">
      {{ contactName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contactName: String,
    contactUrl: String,
    contactPic: String,
  },
};
</script>

<style scoped>
.contact {
  display: flex;
  align-items: center;
  width: fit-content;
}

.contact-pic {
  padding: 10px;
  background-color: var(--color-dark-cyan);
  background-position: center bottom;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  opacity: 0.6;
  z-index: 10;
  margin: 5px;
  border: 1px solid var(--color-darker-cyan);
  transition: all 0.5s;
}

.contact-pic:hover {
  color: var(--color-primary-light);
  background-color: var(--color-darker-cyan);
  box-shadow: #a3c9bf 0px 0px 0px 3px, #b2dbd0 0px 0px 0px 6px,
    #c1ece1 0px 0px 0px 9px;
  opacity: 1;
  transition: all 0.25s;
}

.contact-name {
  font-size: 24px;
  margin-left: 20px;
  background-color: red;
  border-radius: 10px;
  padding: 10px;
  /* visibility: hidden; */
}

/* .contact .contact-link .contact-pic:hover {
  visibility: visible;
  border: 1px solid green;
} */
</style>
