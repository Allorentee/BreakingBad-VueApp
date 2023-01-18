import { onMounted, ref } from "vue";

import { ApiInterface, Character } from "../../api/interface/api-interface";
import rickAndMortyApi from "../../api/rickAndMorty.api";

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();

export const useCharacters = () => {
  onMounted(() => {
    loadCharacters();
  });

  const loadCharacters = () => {
    if (characters.value.length > 0) return;
    isLoading.value = true;

    try {
      rickAndMortyApi.get<ApiInterface>("/character").then((res) => {
        characters.value = res.data.results;
        isLoading.value = false;
      });
    } catch (error) {
      hasError.value = true;
      errorMessage.value = "error";
    }
  };

  return {
    characters,
    isLoading,
    hasError,
    errorMessage,
  };
};
