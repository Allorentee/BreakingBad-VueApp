import { Character } from "../api/interface/api-interface";

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
