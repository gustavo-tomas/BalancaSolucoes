<template>
  <div id="nav">
    <span>Balança Soluções</span>
    <router-link to="/">Início</router-link>
    <router-link to="/about">Planos</router-link>
    <router-link to="/about">Contato</router-link>
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
  padding: 30px;
  user-select: none;
  background-color: var(--color-dark-cyan);
}

#nav a {
  font-weight: bold;
  color: var(--color-primary-black);
  text-decoration: none;
}

nav a:hover {
  color: var(--color-primary-light);
}

#nav a.router-link-exact-active {
  color: var(--color-primary-black);
}
</style>
