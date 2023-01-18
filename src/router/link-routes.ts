export interface IRoutes {
  path: string;
  tittle: string;
  name: string;
}

export const appRoutes: IRoutes[] = [
  { path: "/", name: "home", tittle: "Home" },
  { path: "/about", name: "about", tittle: "About" },
  { path: "/characters", name: "characters", tittle: "Characters" },
];
