import Home from "../pages/Home";
import Products from "../pages/Products";
import Purchase from "../pages/Purchase";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/purchase/:id", name: "Purchase", Component: Purchase },
  { path: "/products", name: "Products", Component: Products },
];
