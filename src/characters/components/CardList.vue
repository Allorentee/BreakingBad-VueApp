<script setup lang="ts">
import { ref } from "vue";
import breakingBadApi from "../../api/breakingBad.api";
import type { BreakingBadAPI } from "../../api/interface/api-interface";

const characters = ref<BreakingBadAPI[]>([]);

breakingBadApi.get<BreakingBadAPI[]>("/v1/quotes/20").then((res) => {
  characters.value = res.data;
});
</script>

<template>
  <ul>
    <li v-for="{ quote, author } of characters" :key="author">
      <p>{{ quote }}</p>
      <p>{{ author }}</p>
    </li>
  </ul>
</template>

<style scoped></style>
