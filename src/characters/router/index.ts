import type { RouteRecordRaw } from "vue-router";
import CharacterLayout from "../layout/CharacterLayout.vue";
import CharacterShearchVue from "../pages/CharacterShearch.vue";
import CharactersIdVue from "../pages/CharactersId.vue";
import CharactersListVue from "../pages/CharactersList.vue";

export const characterRoutes: RouteRecordRaw = {
  path: "/characters",
  redirect: "/characters/list",
  component: CharacterLayout,
  children: [
    {
      path: "by/id",
      name: "characters_id",
      props: { tittle: "ID", visible: false },
      component: CharactersIdVue,
    },
    {
      path: "list",
      name: "characters_list",
      props: { tittle: "List", visible: true },
      component: CharactersListVue,
    },
    {
      path: "search",
      name: "characters_search",
      props: { tittle: "Search", visible: true },
      component: CharacterShearchVue,
    },
  ],
};
