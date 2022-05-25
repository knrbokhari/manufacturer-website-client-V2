import React, { useState } from 'react';
import useProducts from '../../../hooks/useProducts';

const ManageProducts = () => {
    const [cancelOrder, setCancelOrder] = useState(null)
    const [products] = useProducts()

    const handleDelete = () => {
        fetch(`http://localhost:5000/product/${cancelOrder}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    alert(`your order is deleted.`);
                    setCancelOrder(null);
                }
            });
    }

    console.log(products)
    return (
        <div>
            <h2>Manage Products</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{product?.name}</td>
                                    <td>{product?.quantity}</td>
                                    <td>${product?.price}</td>
                                    <td><label for="my-modal-6" class="btn modal-button btn-sm" onClick={() => setCancelOrder(product._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </label></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Confirmation</h3>
                        <p class="py-4">Do you want to Delete this order?</p>
                        <div class="modal-action">
                            <label for="my-modal-6" onClick={() => handleDelete()} class="btn">Delete</label>
                            <label for="my-modal-6" class="btn">Cancel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;