import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Register from "../pages/Register";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/products", name: "Products", Component: Products },
  { path: "/login", name: "Login", Component: Login },
  { path: "/register", name: "Register", Component: Register },
];
