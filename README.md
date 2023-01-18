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
