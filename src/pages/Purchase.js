import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Shared/Loading";

const Purchase = () => {
  const { id } = useParams()
  const [order, setOrder] = useState(0)
  const url = `https://warm-brook-08565.herokuapp.com/product/${id}`;
  const { data, isLoading } = useQuery('product', () => fetch(url).then((res) => res.json()))

  // const { name, image, minOrder, price, description, quantity } = data;


  if (isLoading) {
    return <Loading></Loading>
  }

  const handleOrderQuantity = (e) => {
    setOrder(e.target.value)
  }

  const handleOrder = (e) => {
    e.preventDefault()
    if (order < data?.minOrder) {
      return alert('the order quantity can not be Lower than the minimum quantity')
    }
    if (order > data?.quantity) {
      return alert('the order quantity can not be higher than the available quantity')
    }

  }

  return (
    <div className="container mx-auto mt-32">
      <div className="grid md:grid-cols-2  items-center">
        <img src={data?.image} alt='' className='max-w-md mx-auto' />
        <div className="px-5">
          <form onSubmit={handleOrder}>
            <p className="text-lg">Product Id: {data?._id}</p>
            <p className="text-lg">Name: {data?.name}</p>
            <p className="text-lg">Description: {data?.description} </p>
            <p className="text-lg">Available Quantity: {data?.quantity}</p>
            <p className="text-lg">Minimum Order Quantity: {data?.minOrder}</p>
            <p className="text-lg">Price: ${data?.price}</p>
            <input type="number" placeholder={data?.minOrder} onBlur={handleOrderQuantity} name='order' class="input input-bordered w-full max-w-xs" />
            <p className="text-lg">Total Price: {data?.price * order}</p>
            <button className="btn btn-primary block" disabled={order < data?.minOrder || order > data?.quantity}>Order Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
