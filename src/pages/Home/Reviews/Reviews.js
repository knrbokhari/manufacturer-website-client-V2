import React from 'react';
import useReview from '../../../hooks/useReview';

const Reviews = () => {
    const [reviews] = useReview()
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-5xl'>Reviews</h2>
            <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
                {
                    reviews.reverse().map(review => (
                        <div key={review._id} className="carousel-item border w-11/12  rounded-lg">
                            <div className="card p-7 w-full bg-base-100 shadow-xl">
                                <div className="flex relative">
                                    <div class="avatar">
                                        <div class="w-20 h-20 rounded-full">
                                            <img src={review?.image ? review?.image : 'https://i.ibb.co/TYCW2Fz/istockphoto-666545204-612x612-1.jpg'} alt='' />
                                        </div>
                                    </div>
                                    <div className="ml-5 ">
                                        <h3 className='text-xl font-bold'>{review?.name}</h3>
                                        <div className="w-full mt-1">
                                            <div className="grid w-full grid-cols-2">
                                                <div class="rating rating-md">
                                                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked={1 === parseInt(review?.rating)} />
                                                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked={2 === parseInt(review?.rating)} />
                                                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked={3 === parseInt(review?.rating)} />
                                                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked={4 === parseInt(review?.rating)} />
                                                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked={5 === parseInt(review?.rating)} />
                                                </div>
                                                <p className='absolute right-0 text-gray-500'>{review?.time}</p>
                                            </div>
                                        </div>
                                        <p className='mt-3'>{review?.review}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Reviews;