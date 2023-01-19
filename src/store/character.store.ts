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
  startLoadingCharacters() {},
  loadCharacters(data: Character[]) {
    //Estamos igualando la propiedad characters del store a un nuevo objeto con las propiedades actualizadas.
    this.characters = {
      count: data.length,
      isLoading: false,
      errorMessage: "",
      hasErro: false,
      //Desestructuramos la data para asegurarnos que es un nuevo elemento y evitar paso por referencia.
      list: [...data],
    };
  },
  loadCharacterFail(error: string) {},
});
export default characterStore;
