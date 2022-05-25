import React from 'react';

const DeleteConfirmModal = ({ cancelOrder, setCancelOrder }) => {
    const handleDelete = () => {
        fetch(`http://localhost:5000/booking/${cancelOrder}`, {
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
    return (
        <div>
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
    );
};

export default DeleteConfirmModal;