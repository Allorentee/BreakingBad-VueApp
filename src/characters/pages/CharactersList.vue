<script setup lang="ts">
import CardList from "../components/CardList.vue";
const props = defineProps<{ tittle: string; visible: boolean }>();
</script>
<template>
  <div class="listWrapper">
    <h2>{{ "Characters " + props.tittle }}</h2>
    <div class="cardList">
      <CardList></CardList>
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
