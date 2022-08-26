import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const AddReview = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrder = async () => {
      await fetch(
        `https://blooming-fortress-19640.herokuapp.com/booking/${id}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Berer ${localStorage.getItem(`accessToken`)}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            navigate("/login");
            signOut(auth);
            window.localStorage.removeItem("accessToken");
          }
          return res.json();
        })
        .then((data) => {
          setOrder(data);
        });
    };

    fetchOrder();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rating = e.target.rating.value || 5;
    const userName = user?.displayName;
    const review = e.target.review.value;
    const dateTime = format(new Date(), "PPp");

    const myReview = {
      rating: rating,
      userName: userName,
      email: user.email,
      review: review,
      time: dateTime,
      bookingId: id,
      productName: order.productName,
      order: order.order,
    };

    fetch("https://blooming-fortress-19640.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(myReview),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review added.");
        e.target.reset();
        navigate("/dashboard/myreview");
      });
  };

  return (
    <div className="container mx-auto pb-14">
      <h2 className="text-center text-3xl my-9">Review</h2>
      <div className="card max-w-xl mx-auto p-7 border bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Type here"
                value={user?.displayName}
                disabled
                className="input input-bordered w-full text-xl"
              />
            </div>
            <div className="flex">
              <div className="flex-1 pt-2">
                <p className="text-2xl">{order.productName}</p>
                <p className="text-xl">Order: {order.order}</p>
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-xl">Your rating</span>
                </label>
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating"
                    value="1"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="3"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="4"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating"
                    value="5"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl">Your review *</span>
              </label>
              <textarea
                type="text"
                name="review"
                cols="5"
                placeholder="Your review"
                className="textarea textarea-bordered text-xl h-28 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-5 mx-auto block"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
