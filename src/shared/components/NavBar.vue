<script setup lang="ts">
import { IRoutes } from "../../router/link-routes";

const props = defineProps<{ tittle: string; links: IRoutes[] }>();
</script>
<template>
  <nav>
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
