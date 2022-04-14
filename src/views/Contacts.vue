<template>
  <div class="contacts">
    <h1>Developers</h1>
    <Contact
      contactName="André Larrosa"
      contactUrl="https://github.com/andrelarrosacrypt"
    />
    <Contact
      contactName="Gustavo Tomás"
      contactUrl="https://github.com/gustavo-tomas"
    />
    <Contact
      contactName="Lucas Sena"
      contactUrl="https://github.com/phillbush"
    />
    <Contact contactName="Gabriel Farago" contactUrl="" />
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";

export default {
  name: "Contacts",
  components: {
    Contact,
  },
};
</script>

<style scoped>
* {
  background-color: green;
}
</style>
