import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import OrderRow from "../OrderRow/OrderRow";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [cancelOrder, setCancelOrder] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking/userbooking/${user.email}`, {
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
  }, [cancelOrder]);

  return (
    <div className="container mx-auto pb-14">
      <h2 className="text-center text-3xl my-9">My Order</h2>

      {!orders.length <= 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>order</th>
                <th>total Prices</th>
                <th>Payment</th>
                <th>Cancel</th>
                <td>transactionId</td>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <OrderRow
                  key={order._id}
                  order={order}
                  index={index}
                  setCancelOrder={setCancelOrder}
                ></OrderRow>
              ))}
            </tbody>
          </table>
          {cancelOrder && (
            <DeleteConfirmModal
              cancelOrder={cancelOrder}
              setCancelOrder={setCancelOrder}
            ></DeleteConfirmModal>
          )}
        </div>
      ) : (
        <h3 className="text-2xl mt-20 text-center">No order found</h3>
      )}
    </div>
  );
};

export default MyOrder;
