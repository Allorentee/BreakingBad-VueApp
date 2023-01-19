<script setup lang="ts">
import { toRef } from "vue";
import { Character } from "../../api/interface/api-interface";

//Para pasar las props de un  componente a otro podemos crear una interface o podemos definir lo que nos llega en el tipado de define props directamente,
//No podemos desestructurar el objeto props y traernos solo characters asi { characters } porque perderia la reactividad.
const props = defineProps<{ char: Character }>();
//Para hacer a una propiedad de un objeto reactiva usamos la palabra toRef() 1º P - Nombre del objeto, 2º P Nombre de la propiedad que queremos hacer reactiva.
const character = toRef(props, "char");
</script>
<template>
  <ul>
    <li>
      <img :src="character.image" :alt="character.name" />
      <p>{{ character.name }}</p>
    </li>
  </ul>
</template>

<style scoped>
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
