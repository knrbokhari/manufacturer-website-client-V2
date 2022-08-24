import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, index, setCancelOrder }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.productName}</td>
      <td>{order.order}</td>
      <td>${order.totalPrices}</td>
      <td>
        {order.status ? (
          <p className="text-green-500 font-bold">Shipped</p>
        ) : order.paid ? (
          <p className="text-green-500 font-bold">Pending</p>
        ) : (
          <Link
            className="btn btn-primary btn-sm"
            to={`/dashboard/payment/${order._id}`}
          >
            Pay
          </Link>
        )}
      </td>
      <td>
        {order.paid ? (
          ""
        ) : (
          <label
            htmlFor="my-modal-6"
            className="btn modal-button btn-sm"
            onClick={() => setCancelOrder(order._id)}
          >
            Cancel
          </label>
        )}
      </td>
      <td>{order.transactionId}</td>
      <td>
        {order.paid && !order.review && (
          <Link
            className="btn btn-success text-stone-100 btn-sm"
            to={`/dashboard/addreview/${order._id}`}
          >
            Give Review
          </Link>
        )}
        {order.review && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            color="green"
            className="rotate-6 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.5l6.785 6.785A48.1 48.1 0 0121 4.143"
            />
          </svg>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
