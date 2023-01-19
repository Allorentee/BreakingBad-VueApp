<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { ApiInterface, Character } from "../../api/interface/api-interface";
import rickAndMortyApi from "../../api/rickAndMorty.api";
import characterStore from "../../store/character.store";
import CardList from "../components/CardList.vue";
const props = defineProps<{ tittle: string; visible: boolean }>();

// const apiCall = async (): Promise<Character[]> => {
//   const { data } = await rickAndMortyApi.get<ApiInterface>("/character");
//   return data.results;
// };

// const {
//   isLoading,
//   isError,
//   error,
//   data: characters,
// } = useQuery(["characters"], apiCall);

characterStore.characters;
</script>
<template>
  <div class="listWrapper">
    <h2>{{ "Characters " + props.tittle }}</h2>
    <div class="cardList">
      <CardList
        :char="characterStore.characters.list"
        :load="characterStore.characters.isLoading"
      ></CardList>
    </div>
  </div>
</template>

<style scoped>
.listWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
