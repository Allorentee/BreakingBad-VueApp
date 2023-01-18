import { characterRoutes } from "./../characters/router/index";
import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import HomePage from "../shared/pages/HomePage.vue";
import AboutPage from "../shared/pages/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "", component: HomePage },
    { path: "/about", name: "about", component: AboutPage },
    //1º Manera de añadir rutas hijas.
    // characterRoutes,
    //3º Manera de añadir rutas hijas
    {
      ...characterRoutes,
      path: "/characters",
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});
//2º Manera de añadir rutas hijas.
// router.addRoute(characterRoutes);
export default router;
