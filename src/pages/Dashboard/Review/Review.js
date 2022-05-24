import React from 'react';

const Review = (props) => {
    const { rating, name, review, time, image } = props.review

    return (
        <div class="container mx-auto border card w-full my-5 bg-base-100 shadow-xl">
            <div class="card-body ">
                <div className="flex relative">
                    <div class="avatar">
                        <div class="w-24 h-24 rounded-full">
                            <img src={image ? image : 'https://i.ibb.co/TYCW2Fz/istockphoto-666545204-612x612-1.jpg'} alt='' />
                        </div>
                    </div>
                    <div className="ml-5 ">
                        <h3 className='text-xl font-bold'>{name}</h3>
                        <div className="w-full mt-1">
                            <div className="grid w-full grid-cols-2">
                                <div class="rating rating-md">
                                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked={1 === parseInt(rating)} />
                                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked={2 === parseInt(rating)} />
                                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked={3 === parseInt(rating)} />
                                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked={4 === parseInt(rating)} />
                                    <input type="radio" name="rating" class="mask mask-star-2 bg-orange-400" checked={5 === parseInt(rating)} />
                                </div>
                                <p className='absolute right-0 text-gray-500'>{time}</p>
                            </div>
                        </div>
                        <p className='mt-3'>{review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;