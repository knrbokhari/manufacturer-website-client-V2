import React from 'react';

const Reviews = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-5xl'>Reviews</h2>
            <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
                <div className="carousel-item border w-11/12  rounded-lg">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body gap-5 flex flex-row items-center">
                            <div className="max-w-fit">
                                <div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=53273" alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h2 className="card-title">email</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item border w-11/12  rounded-lg">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body flex flex-row items-center">
                            <div className="max-w-fit">
                                <div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=53273" alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h2 className="card-title">email</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;