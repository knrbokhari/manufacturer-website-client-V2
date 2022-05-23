import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const user = true;
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
      {/* shapping */}
      <li>
        <NavLink to="/shiping" className="py-2 rounded-full">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </NavLink>
      </li>
      {/* profile */}
      {user ? (
        <li className="rounded-full">
          <div class="dropdown dropdown-end py-0">
            <label
              tabindex="0"
              class="btn btn-ghost btn-circle avatar rounded-full"
            >
              <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact navbar dropdown-content top-16  shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
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
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full fixed z-10 bg-slate-100">
          <div className="w-full navbar container mx-auto">
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
