# SCRIPT SETUP

¿Cuando usar?

- Cuando es un codigo mantenible con poco codigo
- Cuando es un componente pequeño
- Estrategia de refactorizacion
- Solo funciona en script setup
- Cuando separamos la logica el archivo no lleva setup para que pueda reconocerlo.# SCRIPT SETUP

**DEFINE COMPONENT**

Cuando exportamos la logica de un archivo aparte es necesario el define component

```
import {defineComponent} from 'vue'
export default defineComponent({
    <!-- Logica de la App -->
})
```

**SNIPPETS**

vbase-3-ts
vbase-3-ts-setup

**LAYOUT**

La idea del layout separado por paginas es que cada pagina tendra su layout correspondiente.

**REACTIVE & REF**

-reactive solo funciona con objetos y arrays
-ref funciona con todo tipo de datos.

# ROUTES

- **history** : Como queremos crear las rutas. el createwebHashHistory crea las rutas con un hash
- history: createWebHistory(import.meta.env.BASE_URL), -> Poder especificar cual es la ruta base donde encontramos todo.
- **Lazy Loading**: Rutas Lazy
  ```
    {
      path: "/characters",
      name: "characters",
      component: () => import("../characters/layout/CharacterLayout.vue"),
    }
  ```

## FORMAS DE CREAR RUTAS HIJAS

_En las rutas hijas no ponemos el path_

- hacer rutas hijas podemos hacerlas en archivos separados y simplemente importarla en las rutas
- Añadir app.addRouter(Characters)
- Hacer una copia del objeto de la ruta y definir el path que asunque sea redundante se muestra sin tener que usar comentarios

  ```
  {
    ...CharacterRouter,
    path='/characters'
  }
  ```

  ### REDIREC

- Formas de redireccionar hacia otro path cuando entramos en una ruta
  ```
  redirect: '/characters/list'
  ```
- IMPORTANTE: Sin el redirect hacia una pagina con una subpagina, no funcionan las rutas hijas, las rutas hijas solo funcionan si se acceden desde una url con dos path,es decir characters/list ahi se cambiara la ruta list por la que sea sin embargo, /characters no se podra navegar entre las diversas subrutas, marcara como qur nno las ha encontrado.

# PROPS

Para pasar por props de un componente a otro hay que definirlas en el componente, podemos hacerlo en javascript con mucho codigo o con typescript en una linea con el uso de typado genericos o interfaces,

```
<!-- JS -->

const props = defineProps({
  tittle: {
    type: String,
    required: true,
    default: 'DefaulT'
  }
})

<!-- ts -->

const  props = defineProps<{tittle: String}>()

<!-- Cuando hay mas de tres props se recomienda el uso de interfaces. -->

```

# LLAMADAS API

Podemos hacer las llamas declarando la variable y asignandola el valor de un array vacio, despues pòdemos llenar a esta variable reactiva, es decir que puede tener cambios con lo que nos devuelve la llamada a la api.

```
const characters = ref<Characters[]>([])

breakingBadApi.get<BreakingBadAPI[]>("/characters")
  .then((res) => {
    characters.value = res.data;
  });

```

## SUSPENSE

Permite la ceaccion de componentes asyncronos.
Existe el componente suspense, que espera a cargar el componente cuando este reciba la informacion de los datos y se puede ahorrar tanto codigo como esto.

```
const { data } = await breakingBadApi.get<BreakingBadAPI[]>("/characters")
const characters = ref<Character[]>( data )
```

Cuando nosotros queremos guardar la data en una variable que no sea reactiva, podemos hasta definirla en la misma linea

```
const { data: characters } = await breakingBadApi.get<BreakingBadAPI[]>("/characters")

```

## COMPOSABLE FUNCTIONS

Muy parecido a los customHooks de react

### ESTADO LOCAL

Separamos la logia con las variables reactivas en un componente aparte y devolvemos un objeto con estas variables, a la hora de llamarlas dentro del componente desestructuramos const { characters, isLoading } = useCharacters

```
import { ref } from "vue";
import { ApiInterface, Character } from "../../api/interface/api-interface";
import rickAndMortyApi from "../../api/rickAndMorty.api";

export const useCharacters = () => {
  const characters = ref<Character[]>([]);
  const isLoading = ref<boolean>(true);

  rickAndMortyApi.get<ApiInterface>("/character").then((res) => {
    characters.value = res.data.results;
    isLoading.value = false;
  });

  return {
    characters,
    isLoading,
  };
};

```

### ESTADO GLOBAL

Para que tenga un estado global en la aplicaciony opor ejemplo no vuelva a hacer llamadas que no son necesarias guardando la data en un estado global.

Ejemplo de un estado global, sacamos las variables a alcance global, estas no infieren con otras variables de alcance global que se llamen igual vue gestiona eso y y lo qe hacemos es una vez se monta el componente ejecutar la funcion esta comprueba si ya hemos recogido personajes anteriormente y si es asi no vuelve a hacer la carga de datos.

```
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

```
