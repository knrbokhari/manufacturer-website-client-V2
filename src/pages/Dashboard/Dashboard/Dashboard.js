import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../../hooks/CustomLink';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    return (
        <div className="mt-14 drawer drawer-mobile">
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

                    {
                        admin ? <li>
                            <CustomLink to="/dashboard">Manage All Order</CustomLink>
                        </li> : <li>
                            <CustomLink to="/dashboard">My Order</CustomLink>
                        </li>
                    }
                    <li>
                        <CustomLink to="/dashboard/profile">Profile</CustomLink>
                    </li>
                    {!admin && <li>
                        <CustomLink to="/dashboard/myreview">My Reviews</CustomLink>
                    </li>}
                    {admin && (
                        <li>
                            <CustomLink to="/dashboard/alluser">Make Admin</CustomLink>
                        </li>
                    )}
                    {admin && (
                        <li>
                            <CustomLink to="/dashboard/addaproduct">Add A Product</CustomLink>
                        </li>
                    )}
                    {admin && (
                        <li>
                            <CustomLink to="/dashboard/manageproduct">Manage Products</CustomLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;