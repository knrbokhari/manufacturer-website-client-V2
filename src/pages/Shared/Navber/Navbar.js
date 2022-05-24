import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const nav = (
    <>
      <li>
        <NavLink to="/" className="rounded-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className="rounded-lg">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className="rounded-lg">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="rounded-lg">Dashboard</NavLink>
      </li>
      {/* profile */}
      {user ? (
        <li className="rounded-full">
          <div className="dropdown dropdown-end py-0">
            <label
              tabindex="0"
              className="btn btn-ghost btn-circle avatar rounded-full"
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL ? user.photoURL : "https://i.ibb.co/TYCW2Fz/istockphoto-666545204-612x612-1.jpg"} alt="" />
                {/* <img src="https://i.ibb.co/238L936/man.png" alt="" /> */}
              </div>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact navbar dropdown-content top-16  shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        </li>
      ) : (
        <li>
          <NavLink to="/login" className="rounded-lg">
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="drawer bg-base-100 drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full fixed z-10 bg-transparent">
          <div className="w-full navbar container mx-auto">
            <div className="navbar-start w-10">
              <label
                tabIndex="1"
                htmlFor="dashboard-sidebar"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden md:block">
              <ul className="menu menu-horizontal gap-3">{nav}</ul>
            </div>
            <div className="flex-none md:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        {/* Content */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 gap-2 items-center">
          {nav}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
