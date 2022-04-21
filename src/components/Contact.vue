<template>
  <a
    class="contact-name"
    :style="{ backgroundImage: 'url(' + contactPic + ')' }"
    :href="contactUrl"
    target="_blank"
  >
    {{ contactName }}
  </a>
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
.contact-name {
  font-size: 24px;
  text-decoration: none;
  color: var(--color-primary-dark);
  padding: 10px;
  background-color: var(--color-dark-cyan);
  background-position: center bottom;
  background-repeat: no-repeat;
  border-radius: 10px;
  opacity: 0.6;
  z-index: 10;
  margin: 10px;
  border: 1px solid var(--color-darker-cyan);
  transition: all 0.5s;
}

.contact-name:hover {
  box-shadow: #a3c9bf 0px 5px, #b2dbd0 0px 10px, #c1ece1 0px 15px;
  padding-bottom: 100px;
  color: var(--color-primary-light);
  background-color: var(--color-darker-cyan);
  opacity: 1;
  transition: all 0.25s;
}
</style>
