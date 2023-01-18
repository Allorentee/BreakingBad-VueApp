import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import HomePage from "../shared/pages/HomePage.vue";
import AboutPage from "../shared/pages/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Rutas Publicas
    { path: "/", name: "", component: HomePage },
    { path: "/about", name: "about", component: AboutPage },
    //characters
    {
      path: "/characters",
      name: "characters",
      component: () => import("../characters/layout/CharacterLayout.vue"),
    },
    //default route
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

export default router;
