import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Authentication/PrivateRoute";
import Navbar from "./components/Navber/Navbar";
import Footer from "./components/Shared/Footer";
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoute } from "./routes/publicRoutes";

function App() {
  return (
    // <div className="container mx-auto">
    <Navbar>
      {
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<PrivateRoute />}>
            {privateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      }
      <Footer />
    </Navbar>
    // </div>
  );
}

export default App;
