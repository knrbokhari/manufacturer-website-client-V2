import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';

const AllOrder = () => {
    const [cancelOrder, setCancelOrder] = useState(null)
    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery("orders", () =>
        fetch("https://warm-brook-08565.herokuapp.com/booking", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    const hendaleShipped = (id) => {
        fetch(`https://warm-brook-08565.herokuapp.com/shipping/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                refetch()
            });
    }


    return (
        <div>
            <h2 className='text-center text-3xl my-9'>All Order</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Paid</th>
                            <th>Status</th>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.paid ? "paid" : 'unpaid'}</td>
                                    <td>{(order?.paid && order?.status) ? 'shipped' : <button className='btn btn-primary btn-sm' disabled={!order?.paid} onClick={() => hendaleShipped(order._id)}>Pending</button>}</td>
                                    <td>{order.paid ? "" : (
                                        <label for="my-modal-6" className="btn modal-button btn-sm" onClick={() => setCancelOrder(order._id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </label>)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            {
                cancelOrder && <DeleteConfirmModal
                    cancelOrder={cancelOrder}
                    setCancelOrder={setCancelOrder}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default AllOrder;