export interface IRoutes {
  path: string;
  tittle: string;
}

export const appRoutes: IRoutes[] = [
  { path: "/", tittle: "Home" },
  { path: "/about", tittle: "About" },
  { path: "/characters", tittle: "Characters" },
];
