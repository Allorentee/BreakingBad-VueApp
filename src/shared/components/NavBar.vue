<script setup lang="ts"></script>
<template>
  <nav>
    <img src="./../../assets/Logo.png" alt="Logo-Menu" />
    <span>Algo</span>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100;
  font-size: 1rem;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
}
a {
  margin-right: 5px;
}
img {
  margin-right: 5px;
}
span {
  margin-right: 10px;
}
</style>
