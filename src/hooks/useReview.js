import { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, seReviews] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const rsc = await fetch("https://warm-brook-08565.herokuapp.com/review");
            const data = await rsc.json();
            seReviews(data);
        };

        fetchProduct();
    }, [reviews]);
    return [reviews];
};

export default useReview;