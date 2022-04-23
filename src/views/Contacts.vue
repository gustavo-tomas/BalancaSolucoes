<template>
  <div class="container">
    <p class="title">Desenvolvedores</p>
    <div class="circle-container">
      <a href="https://github.com/gustavo-tomas/BalancaSolucoes" class="center"
        ><img
          src="https://github.com/github.png?size=100"
          @mouseover="name = 'Repositório do Projeto'"
          @load="name = 'Conheça os desenvolvedores!'"
      /></a>
      <a href="https://github.com/gustavo-tomas" class="deg2" target="_blank"
        ><img
          src="https://github.com/gustavo-tomas.png?size=100"
          @mouseover="name = 'Gustavo Tomás'"
      /></a>
      <a href="https://github.com/gabrielchan98" class="deg3" target="_blank"
        ><img
          src="https://github.com/gabrielchan98.png?size=100"
          @mouseover="name = 'Gabriel Farago'"
      /></a>
      <a href="https://github.com/phillbush" class="deg4" target="_blank"
        ><img
          src="https://github.com/phillbush.png?size=100"
          @mouseover="name = 'Lucas Sena'"
      /></a>
      <a href="https://github.com/rafaelnogalha" class="deg5" target="_blank"
        ><img
          src="https://github.com/rafaelnogalha.png?size=100"
          @mouseover="name = 'Rafael Nogalha'"
      /></a>
      <a
        href="https://github.com/andrelarrosacrypt"
        class="deg6"
        target="_blank"
        ><img
          src="https://github.com/andrelarrosacrypt.png?size=100"
          @mouseover="name = 'André Larrosa'"
      /></a>
    </div>
    <span class="contact-name">{{ name }}</span>
  </div>
  <p class="thanks">Obrigado por usar o Balança Soluções!</p>
</template>

<script>
let name = "";

export default {
  name: "Contacts",
  data() {
    return {
      name,
    };
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
  margin-top: 30px;
}

.contact-name {
  font-size: 24px;
  color: var(--color-primary-white);
  background-color: var(--color-darker-cyan);
  padding: 10px 15px;
  border-radius: 5px;
}

.thanks {
  margin-top: 5px;
  font-style: italic;
  color: gray;
}

.circle-container {
  position: relative;
  width: 24em;
  height: 24em;
  border-radius: 50%;
}

.circle-container a {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4em;
  height: 4em;
  margin: -3.4em;
}

img {
  border-radius: 50%;
  width: 100px;
  height: 100px;

  /* transition */
  z-index: 10;
  opacity: 0.6;
  margin: 5px;
  border: 1px solid var(--color-darker-cyan);
  background-color: var(--color-dark-cyan);
  transition: all 0.3s;
}

a.center {
  z-index: 100;
}

.deg2 img {
  position: relative;
  top: -110px;
}

.deg3 img {
  position: relative;
  top: 65px;
  left: 90px;
}

.deg4 img {
  position: relative;
  top: 65px;
  left: -90px;
}

.deg5 img {
  position: relative;
  top: -50px;
  left: -100px;
}

.deg6 img {
  position: relative;
  top: -50px;
  left: 100px;
}

img:hover {
  color: var(--color-primary-light);
  background-color: var(--color-darker-cyan);
  box-shadow: #a3c9bf 0px 0px 0px 3px, #b2dbd0 0px 0px 0px 6px,
    #c1ece1 0px 0px 0px 9px;
  opacity: 1;
  transition: all 0.45s;
}
</style>
