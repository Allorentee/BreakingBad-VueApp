<script setup lang="ts">
import { IRoutes } from "../../router/link-routes";

const props = defineProps<{ tittle: string; links: IRoutes[] }>();
</script>
<template>
  <nav>
    <img src="./../../assets/logo.png" alt="Logo" />
    <span>{{ props.tittle }}</span>
    <RouterLink
      v-for="link of props.links"
      :key="link.tittle"
      :to="link.path"
      >{{ link.tittle }}</RouterLink
    >
  </nav>
</template>

<style scoped>
nav {
  padding: 20px;
  width: 100;
  font-size: 1rem;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
a {
  margin-right: 15px;
}
img {
  margin-right: 5px;
  width: 40px;
}
span {
  margin: 0px 20px;
}
</style>
