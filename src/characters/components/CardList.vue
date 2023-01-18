<script setup lang="ts">
// import { ref } from "vue";
// import rickAndMortyApi from "../../api/rickAndMorty.api";
// import type {
//   ApiInterface,
//   Character,
// } from "../../api/interface/api-interface";
import { useCharacters } from "../composable/useCharacters";

const { characters, isLoading } = useCharacters();
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
