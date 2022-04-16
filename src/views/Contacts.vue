<template>
  <div class="contacts">
    <p class="title">Developers</p>
    <Contact
      contactName="André Larrosa"
      contactUrl="https://github.com/andrelarrosacrypt"
      contactPic="https://github.com/andrelarrosacrypt.png?size=100"
    />
    <Contact
      contactName="Gustavo Tomás"
      contactUrl="https://github.com/gustavo-tomas"
      contactPic="https://github.com/gustavo-tomas.png?size=100"
    />
    <Contact
      contactName="Lucas Sena"
      contactUrl="https://github.com/phillbush"
      contactPic="https://github.com/phillbush.png?size=100"
    />
    <Contact
      contactName="Rafael Nogalha"
      contactUrl="https://github.com/rafaelnogalha"
      contactPic="https://github.com/rafaelnogalha.png?size=100"
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
  padding-bottom: 40px;
}

.contacts {
  margin: auto;
  background-image: url("../../public/assets/images/scale.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 1000px;
}
</style>
