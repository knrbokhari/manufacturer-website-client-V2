import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../../hooks/CustomLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const logout = () => {
    signOut(auth);
    window.localStorage.removeItem("accessToken");
  };

  const dashboardPathname = window.location.href
    .split("/")
    .find((db) => db === "dashboard");

  const nav = (
    <>
      <li>
        <CustomLink
          to="/"
          className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
        >
          Home
        </CustomLink>
      </li>
      <li>
        <CustomLink
          to="/products"
          className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
        >
          Products
        </CustomLink>
      </li>
      <li>
        <CustomLink
          to="/blogs"
          className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
        >
          Blogs
        </CustomLink>
      </li>
      <li>
        <CustomLink
          to="/myportfolio"
          className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
        >
          Portfolio
        </CustomLink>
      </li>
      {user && (
        <li>
          <CustomLink
            to="/dashboard"
            className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          >
            Dashboard
          </CustomLink>
        </li>
      )}
      {user ? (
        <li>
          <button
            onClick={logout}
            className="px-3 py-2 m-0 mx-auto flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          >
            Logout
          </button>
        </li>
      ) : (
        <li>
          <CustomLink
            to="/login"
            className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          >
            Login
          </CustomLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="flex w-full flex-wrap items-center justify-between px-2 py-3 bg-gray-500 z-10 fixed top-0">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          {user && dashboardPathname && (
            <label
              tabIndex="1"
              htmlFor="dashboard-sidebar"
              className="btn text-white lg:hidden"
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
          )}
          <Link
            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            to="/"
          >
            Manufactory
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-9 h-9 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center justify-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {nav}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
