import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const [order, setOrder] = useState(0);
  const navigate = useNavigate();
  const url = `http://localhost:5000/product/${id}`;
  const { data, isLoading } = useQuery("product", () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  const handleOrderQuantity = (e) => {
    setOrder(e.target.value);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (order < data?.minOrder) {
      return alert(
        "the order quantity can not be Lower than the minimum quantity"
      );
    }
    if (order > data?.quantity) {
      return alert(
        "the order quantity can not be higher than the available quantity"
      );
    }

    const booking = {
      id: data._id,
      productName: data?.name,
      order: order,
      totalPrices: data?.price * order,
      name: user.displayName,
      email: user.email,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Thank you for your order!");
          navigate("/dashboard");
        } else {
          alert("sorry something went wrong");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container mx-auto mt-32 pb-14">
      <div className="grid md:grid-cols-2  items-center">
        <img src={data?.image} alt="" className="max-w-md mx-auto" />
        <div className="px-5">
          <form onSubmit={handleOrder}>
            <p className="text-lg">Product Id: {data?._id}</p>
            <p className="text-lg">Name: {data?.name}</p>
            <p className="text-lg">Description: {data?.description} </p>
            <p className="text-lg">Tags: {data?.tag} </p>
            <p className="text-lg">Available Quantity: {data?.quantity}</p>
            <p className="text-lg">Minimum Order Quantity: {data?.minOrder}</p>
            <p className="text-lg">Price: ${data?.price}</p>
            <input
              type="number"
              placeholder={data?.minOrder}
              onBlur={handleOrderQuantity}
              name="order"
              className="input input-bordered w-full max-w-xs"
            />
            <p className="text-lg">Total Price: {data?.price * order}</p>
            <button
              className="btn btn-primary block"
              disabled={order < data?.minOrder || order > data?.quantity}
            >
              Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
