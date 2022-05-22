import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navber/Navbar";
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
        </Routes>
      }
    </Navbar>
    // </div>
  );
}

export default App;
