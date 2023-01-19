<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { ApiInterface, Character } from "../../api/interface/api-interface";
import rickAndMortyApi from "../../api/rickAndMorty.api";
import { useCharacters } from "../composable/useCharacters";
//! SUSPENSE
//Debemos colocar el <Suspense> para que este componente sea asyncrono.
//? Para objetos no reactivos renombramos el nombre de la data asi -> {data: characters}
// const { data } = await rickAndMortyApi.get<ApiInterface>("/character");
// const characters = data.results;

//! COMPOSABLE FUNCTION
// const { characters, isLoading } = useCharacters();

//! TANSTACK QUERY
//Lo que hemos creado antes con el composable function lo acabamos de recoger desde la libreria tanQuery

const apiSlowCall = async (): Promise<Character[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const { data } = await rickAndMortyApi.get<ApiInterface>("/character");
      resolve(data.results);
    }, 1000);
  });
};

const {
  isLoading,
  isError,
  //Renombrar una propiedad de un objeto en la desestructuracion.
  data: characters,
  error,
} = useQuery(["characters"], apiSlowCall, {
  cacheTime: 1000 * 60,
  // refetchOnReconnect: "always",
});
</script>

<template>
  <div class="cardWrapper">
    <h1 v-if="isLoading">Loading...</h1>
    <ul>
      <li v-for="character of characters" :key="character.name">
        <img :src="character.image" :alt="character.name" />
        <p>{{ character.name }}</p>
      </li>
    </ul>
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
img {
  width: 200px;
  border-radius: 10px;
}
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
li {
  list-style-type: none;
  text-align: center;
}
</style>
