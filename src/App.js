import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Shared/Navber/Navbar";
import Footer from "./pages/Shared/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import Products from './pages/Products/Products/Products';
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Purchase from "./pages/Purchase/Purchase";
import RequireAuth from './hooks/RequireAuth';
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import Payment from './pages/Dashboard/Payment/Payment';


function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
            <Route index element={<MyOrder />}></Route>
            <Route path="payment/:id" element={<Payment />}></Route>
          </Route>
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
