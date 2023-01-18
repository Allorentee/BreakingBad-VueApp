<script setup lang="ts">
import { IRoutes } from "../../router/link-routes";
import NavBar from "../../shared/components/NavBar.vue";
import { characterRoutes } from "../router";

const routerLinks: IRoutes[] = characterRoutes
  .children!.filter((route) => (route.props as { visible: boolean }).visible)
  .map((route) => {
    return {
      path: route.path,
      tittle: (route.props as { tittle: string; visible: boolean }).tittle,
      name: route.name as string,
    };
  });
</script>
<template>
  <h1>Characters Page</h1>
  <NavBar :show-icon="false" :links="routerLinks"></NavBar>
  <RouterView></RouterView>
</template>

<style scoped></style>
