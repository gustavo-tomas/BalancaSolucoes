<template>
  <div class="contacts">
    <p class="title">Developers</p>
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
.title {
  font-size: 64px;
  padding: 80px;
}

.contacts {
  margin: auto;
  background-image: url("../../public/assets/scale_1080.png");
  background-repeat: no-repeat;
  height: 1080px;
  width: 1080px;
}
</style>
