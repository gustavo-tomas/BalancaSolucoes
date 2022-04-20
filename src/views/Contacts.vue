<template>
  <div class="container">
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
      <Contact
        contactName="Gabriel Farago"
        contactUrl="https://github.com/gabrielchan98"
        contactPic="https://github.com/gabrielchan98.png?size=100"
      />
    </div>
    <div class="icon-container">
      <a
        href="https://github.com/gustavo-tomas/BalancaSolucoes"
        target="_blank"
      >
        <i class="fa fa-github"></i>
      </a>
    </div>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 64px;
  padding-bottom: 40px;
}

.contacts {
  margin: auto;
  height: auto;
}

.icon-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: url("../../public/assets/images/scale.png");
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 100px;
  width: 700px;
  height: 400px;
}

.fa-github {
  color: black;
  font-size: 64px;
}
</style>
