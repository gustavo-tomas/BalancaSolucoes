<template>
  <a class="contact-name" :href="contactUrl" target="_blank">
    {{ contactName }}
  </a>
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
  text-decoration: none;
  color: var(--color-primary-dark);
  padding: 10px;
  background-color: var(--color-dark-cyan);
  border-radius: 10px;
  margin: 10px;
  border: 1px solid var(--color-darker-cyan);
  transition: background-color 0.75s, color 0.5s;
}

.contact-name:hover {
  color: var(--color-primary-light);
  background-color: var(--color-darker-cyan);
  transition: background-color 0.5s, color 0.25s;
}
</style>
