<template>
  <div id="nav">
    <p class="title">Balança Soluções</p>
    <router-link to="/" class="nav-item">Início</router-link>
    <router-link to="/plans" class="nav-item">Planos</router-link>
    <router-link to="/testimonies" class="nav-item">Relatos</router-link>
    <router-link to="/contacts" class="nav-item">Contato</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style scoped>
#nav {
  position: fixed;
  display: flex;
  align-items: center;
  margin: auto;
  width: 100vw;
  padding: 0px 50px;
  height: 90px;
  user-select: none;
  background-color: var(--color-dark-cyan);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  z-index: 20;
}
#nav a {
  font-weight: bold;
  color: var(--color-primary-black);
  text-decoration: none;
  transition: background-color 0.75s, color 0.5s;
}
#nav a:hover {
  color: var(--color-primary-light);
  background-color: var(--color-darker-cyan);
  transition: background-color 0.75s, color 0.5s;
}
#nav a.router-link-exact-active {
  color: var(--color-primary-light);
  background-color: var(--color-darker-cyan);
}
.title {
  font-size: 40px;
  margin-right: 50px;
}
.nav-item {
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
