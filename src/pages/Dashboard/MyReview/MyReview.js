import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { format } from 'date-fns'
import useReview from '../../../hooks/useReview';
import Review from '../Review/Review';



const MyReview = () => {
    const [reviews] = useReview()
    const [user] = useAuthState(auth)


    const handleSubmit = (e) => {
        e.preventDefault();
        const rating = e.target.rating.value || 5;
        const userName = user?.displayName;
        const review = e.target.review.value;
        const dateTime = format(new Date(), "PPp")

        const myReview = {
            rating: rating,
            name: userName,
            review: review,
            time: dateTime,
            image: user.photoURL
        }
        fetch("https://warm-brook-08565.herokuapp.com/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(myReview),
        })
            .then((res) => res.json())
            .then((data) => (e.target.reset()));
    }

    return (
        <div className='container mx-auto pb-14'>
            <h2 className='text-center text-3xl my-9'>Review</h2>
            <div className="card max-w-xl mx-auto p-7 border bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <input type="text" placeholder="Type here" value={user?.displayName} disabled className="input input-bordered w-full text-xl" />
                        </div>
                        <label className="label">
                            <span className="label-text text-xl">Your rating</span>
                        </label>
                        <div className="rating rating-md">
                            <input type="radio" name="rating" value='1' className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating" value='2' className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating" value='3' className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating" value='4' className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating" value='5' className="mask mask-star-2 bg-orange-400" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl">Your review *</span>
                            </label>
                            <textarea type="text" name='review' cols='5' placeholder="Your review" className="textarea textarea-bordered text-xl h-28 w-full" required />
                        </div>
                        <button type='submit' className='btn btn-primary mt-5 mx-auto block'>Send</button>
                    </form>
                </div>
            </div>

            {
                reviews.slice(0, 6).reverse().map(review => <Review key={review._id} review={review}></Review>)
            }

        </div>
    );
};

export default MyReview;