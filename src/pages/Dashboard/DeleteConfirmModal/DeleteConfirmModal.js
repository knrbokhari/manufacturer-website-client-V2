import React from "react";

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
        if (data.deletedCount) {
          alert(`your order is deleted.`);
          setCancelOrder(null);
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
              for="my-modal-6"
              onClick={() => handleDelete()}
              className="btn"
            >
              Delete
            </label>
            <label for="my-modal-6" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
