import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { VueQueryPlugin } from "@tanstack/vue-query";
const app = createApp(App);

//! SOLO CON LA IMPORTACION YA CONSTRUYE EL STORE.
import "./store/character.store";

//Podemos establecerle configuraciones para hacer que el use query trabaje con todas estas por defecto.
//Puede manejar el cache por nosotros, en la memoria del navegador web crea espacios y guarda la informacion en la cache del navegador
// app.use(VueQueryPlugin);

//Configuracion por defecto para usarlo en cualquier useQuery
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 120, // 2 Minutos
        refetchOnReconnect: "always",
      },
    },
  },
});

app.use(router);
app.mount("#app");
