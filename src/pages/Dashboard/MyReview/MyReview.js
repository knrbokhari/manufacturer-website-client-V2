import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Review from "../Review/Review";

const MyReview = () => {
  const [user] = useAuthState(auth);
  const [reviews, seReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const rsc = await fetch(`http://localhost:5000/review/${user.email}`, {
        headers: {
          "content-type": "application/json",
          authorization: `Berer ${localStorage.getItem(`accessToken`)}`,
        },
      });
      const data = await rsc.json();
      seReviews(data);
    };

    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto pb-14">
      <h2 className="text-center text-3xl my-9">My Reviews</h2>
      {reviews?.map((review) => (
        <Review key={review._id} review={review}></Review>
      ))}
    </div>
  );
};

export default MyReview;
