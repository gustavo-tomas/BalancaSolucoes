<template>
  <a class="contact-name" :href="contactUrl" target="_blank">{{
    contactName
  }}</a>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contactName: String,
    contactUrl: String,
  },
};
</script>

<style scoped>
.contact-name {
  background-color: gray;
}
</style>
