<script setup lang="ts">
import { toRef } from "vue";
import type { Character } from "../../api/interface/api-interface";
import CardItem from "./CardItem.vue";
//! SUSPENSE
//Debemos colocar el <Suspense> para que este componente sea asyncrono.
//? Para objetos no reactivos renombramos el nombre de la data asi -> {data: characters}
// const { data } = await rickAndMortyApi.get<ApiInterface>("/character");
// const characters = data.results;

//! COMPOSABLE FUNCTION
// const { characters, isLoading } = useCharacters();

//! TANSTACK QUERY
//Lo que hemos creado antes con el composable function lo acabamos de recoger desde la libreria tanQuery

// const apiSlowCall = async (): Promise<Character[]> => {
//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       const { data } = await rickAndMortyApi.get<ApiInterface>("/character");
//       resolve(data.results);
//     }, 1000);
//   });
// };

// const {
//   isLoading,
//   isError,
//   //Renombrar una propiedad de un objeto en la desestructuracion.
//   data: characters,
//   error,
// } = useQuery(["characters"], apiSlowCall, {
//   cacheTime: 1000,
//   // refetchOnReconnect: "always",
// });

const props = defineProps<{ char: Character[]; load: boolean }>();
const characters = toRef(props, "char");
</script>

<template>
  <div class="cardWrapper">
    <h1 v-if="load">Loading...</h1>
    <CardItem
      v-for="character of characters"
      :key="character.name"
      :char="character"
    ></CardItem>
  </div>
</template>

<style scoped>
.cardWrapper {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
