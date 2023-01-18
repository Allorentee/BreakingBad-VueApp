<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./shared/components/NavBar.vue";
import { appRoutes } from "./router/link-routes";
</script>

<template>
  <div class="wrapper">
    <header>
      <!-- navBar  -->
      <NavBar tittle="RickAndMorty" :links="appRoutes" show-icon></NavBar>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
