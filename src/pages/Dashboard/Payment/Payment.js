import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L17qxHBn8eTkaGlOjG2JgVVcr6jvC5t7ubxyFEBpQr3tv8Xb3TvEKUDRPVOMmgZpFmi4BJg9whkV1PjdhB88hgZ00tq97usGQ"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data, isLoading } = useQuery("booking", () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-center text-3xl mt-2">Payment</h2>
      <div className=" md:flex gap-3 px-5 items-center">
        <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl my-12">
          <div className="card-body border">
            <p className="font-bold">Hello, {data.userName}</p>
            <p>Email: {data.email}</p>
            <h2 className="">Your order: {data.productName}</h2>
            <p>Total order: {data.order}</p>
            <p>Please pay: ${data.totalPrices}</p>
          </div>
        </div>
        <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
          <div className="card-body border">
            <Elements stripe={stripePromise}>
              <CheckoutForm data={data} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
