<script setup lang="ts">
import CardList from "../components/CardList.vue";
const props = defineProps<{ tittle: string; visible: boolean }>();
</script>
<template>
  <h2>{{ props.tittle }}</h2>
  <CardList></CardList>
</template>

<style lang="scss" scoped></style>
