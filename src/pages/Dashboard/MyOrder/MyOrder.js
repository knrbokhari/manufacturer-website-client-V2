import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from "firebase/auth";


const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://warm-brook-08565.herokuapp.com/booking?user=${user.email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
                .then((res) => {
                    if (res.status === 401 || res.status === 403) {
                        navigate("/");
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                    }
                    return res.json();
                })
                .then((data) => setOrders(data));
        }
    }, [user]);

    console.log(orders)
    return (
        <div className='container mx-auto pb-14'>
            <h2 className='text-center text-3xl my-9'>MyOrder</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>order</th>
                            <th>total Prices</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => (
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.order}</td>
                                    <td>{order.totalPrices}</td>
                                    <td>{order.paid ? 'paid' : <Link className='btn btn-primary' to={`/dashboard/payment/${order._id}`}>Pay</Link>}</td>
                                    <td>{order.paid ? '' : "Cancel"}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrder;