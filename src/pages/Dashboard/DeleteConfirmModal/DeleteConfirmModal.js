import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ cancelOrder, setCancelOrder }) => {
  const handleDelete = () => {
    fetch(
      `https://blooming-fortress-19640.herokuapp.com/booking/${cancelOrder}`,
      {
        method: "put",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCancelOrder(null);
          toast.success(`Cancel Successful!`);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirmation</h3>
          <p className="py-4">Do you want to Delete this order?</p>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              onClick={() => handleDelete()}
              className="btn"
            >
              Delete
            </label>
            <label htmlFor="my-modal-6" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
