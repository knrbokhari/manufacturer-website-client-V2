import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Shared/Navber/Navbar";
import Footer from "./pages/Shared/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import Products from "./pages/Products/Products/Products";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Purchase from "./pages/Purchase/Purchase";
import RequireAuth from "./hooks/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "./pages/Dashboard/MyOrder/MyOrder";
import Payment from "./pages/Dashboard/Payment/Payment";
import useAdmin from "./hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import AllOrder from "./pages/Dashboard/AllOrder/AllOrder";
import AllUsers from "./pages/Dashboard/AllUsers/AllUsers";
import MyReview from "./pages/Dashboard/MyReview/MyReview";
import Profile from "./pages/Dashboard/Profile/Profile";
import UpdateProfile from "./pages/Dashboard/UpdateProfile/UpdateProfile";
import RequireAdmin from "./hooks/RequireAdmin";
import ManageProducts from "./pages/Dashboard/ManageProducts/ManageProducts";
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio/MyPortfolio";
import Blogs from "./pages/Blogs/Blogs";
import NotFound from "./pages/NotFound/NotFound";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="myportfolio" element={<MyPortfolio />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {!admin && <Route index element={<MyOrder />}></Route>}
          {!admin && <Route path="myreview" element={<MyReview />}></Route>}
          {admin && (
            <Route
              index
              element={
                <RequireAdmin>
                  <AllOrder />
                </RequireAdmin>
              }
            ></Route>
          )}
          {admin && <Route path="alluser" element={<AllUsers />}></Route>}
          <Route path="profile" element={<Profile />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="updateprofile" element={<UpdateProfile />}></Route>
          <Route path="manageproduct" element={<ManageProducts />}></Route>
          <Route path="addaproduct" element={<AddProduct />}></Route>
          <Route path="addreview/:id" element={<AddReview />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

// https://warm-brook-08565.herokuapp.com
