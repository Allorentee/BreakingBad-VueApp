import { Character } from "../api/interface/api-interface";
import { reactive } from "vue";

interface Store {
  characters: {
    list: Character[];
    count: number;
    isLoading: boolean;
    errorMessage: string | null;
    hasErro: boolean;
  };

  //Metodos.
  // Cuando estamos en una interface omitimos la implementacion de la interface y decimos que va a ser una funcion que devuelve x
  startLoadingCharacters: () => void;
  loadCharacters: (data: Character[]) => void;
  loadCharacterFail: (error: string) => void;
}

const characterStore = reactive<Store>({
  characters: {
    list: [],
    count: 0,
    isLoading: true,
    errorMessage: "",
    hasErro: false,
  },
  startLoadingCharacters() {
    console.log("Start Store");
  },
  loadCharacters(data: Character[]) {},
  loadCharacterFail(error: string) {},
});

export default characterStore;
