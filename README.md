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

Existe el componente suspense, que espera a cargar el componente cuando este reciba la informacion de los datos y se puede ahorrar tanto codigo como esto.

```
const { data } = await breakingBadApi.get<BreakingBadAPI[]>("/characters")
const characters = ref<Character[]>( data )
```

Cuando nosotros queremos guardar la data en una variable que no sea reactiva, podemos hasta definirla en la misma linea

```
const { data: characters } = await breakingBadApi.get<BreakingBadAPI[]>("/characters")

```
