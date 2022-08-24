import { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, seReviews] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const rsc = await fetch("http://localhost:5000/review", {});
      const data = await rsc.json();
      seReviews(data);
    };

    fetchProduct();
  }, []);
  return [reviews];
};

export default useReview;
