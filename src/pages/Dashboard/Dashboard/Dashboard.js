import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="mt-11 drawer drawer-mobile" style={{ height: "85vh" }}>
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-3xl text-center mt-14 font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52 mt-4 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}

          {admin ? (
            <li>
              <Link to="/dashboard" className="w-full">
                Manage All Order
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/dashboard" className="w-full">
                My Order
              </Link>
            </li>
          )}
          <li>
            <NavLink to="/dashboard/profile" className="w-full">
              Profile
            </NavLink>
          </li>
          {!admin && (
            <li>
              <NavLink to="/dashboard/myreview" className="w-full">
                My Reviews
              </NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/alluser" className="w-full">
                Make Admin
              </NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/addaproduct" className="w-full">
                Add A Product
              </NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink to="/dashboard/manageproduct" className="w-full">
                Manage Products
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
