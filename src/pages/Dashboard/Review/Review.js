import React, { useEffect } from "react";
import { useState } from "react";

const Review = (props) => {
  const { rating, userName, email, review, time, productName, order } =
    props.review;
  const [user, setUser] = useState([]);

  console.log(props.review);

  useEffect(() => {
    const fetchOrder = async () => {
      await fetch(`http://localhost:5000/user/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Berer ${localStorage.getItem(`accessToken`)}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    };

    fetchOrder();
  }, []);

  return (
    <div className="container mx-auto border card w-full my-5 bg-base-100 shadow-xl">
      <div className="card-body ">
        <div className="flex relative">
          <div className="avatar">
            <div className="w-24 h-24 rounded-full">
              <img
                src={
                  user.photo
                    ? user.photo
                    : "https://i.ibb.co/TYCW2Fz/istockphoto-666545204-612x612-1.jpg"
                }
                alt=""
              />
            </div>
          </div>
          <div className="ml-5 flex-1">
            <h3 className="text-xl font-bold">{userName}</h3>
            <div className="w-full mt-1">
              <div className="grid w-full grid-cols-2">
                <p className="text-xl">{`${productName} (${order})`}</p>
                <div className="absolute right-0 top-0">
                  <p className=" text-gray-500">{time}</p>
                  <div className="rating -right-8 top-2 rating-md">
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      checked={1 === parseInt(rating)}
                    />
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      checked={2 === parseInt(rating)}
                    />
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      checked={3 === parseInt(rating)}
                    />
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      checked={4 === parseInt(rating)}
                    />
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      checked={5 === parseInt(rating)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-base">{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
