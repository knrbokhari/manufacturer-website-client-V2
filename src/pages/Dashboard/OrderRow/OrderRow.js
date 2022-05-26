import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setCancelOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.order}</td>
            <td>${order.totalPrices}</td>
            <td>{order.paid ? <p className='text-green-500 font-bold'>Pending</p> : <Link className='btn btn-primary btn-sm' to={`/dashboard/payment/${order._id}`}>Pay</Link>}</td>
            <td>{order.paid ? '' : (<label for="my-modal-6" className="btn modal-button btn-sm" onClick={() => setCancelOrder(order._id)}>Cancel</label>)}</td>
            <td>{order.transactionId}</td>
        </tr>
    );
};

export default OrderRow;