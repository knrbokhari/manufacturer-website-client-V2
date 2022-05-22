import Home from "../pages/Home";
import Purchase from "../pages/Purchase";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/purchase", name: "Purchase", Component: Purchase },
];
