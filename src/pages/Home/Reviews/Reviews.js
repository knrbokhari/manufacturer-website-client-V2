import React from "react";
import useReview from "../../../hooks/useReview";
import HomeReview from "../HomeReview/HomeReview";

const Reviews = () => {
  const [reviews] = useReview();

  return (
    <div className="container mx-auto mb-12">
      <h2 className="text-center text-5xl">Reviews</h2>
      <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
        {reviews?.map((review) => (
          <HomeReview key={review._id} review={review}></HomeReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
