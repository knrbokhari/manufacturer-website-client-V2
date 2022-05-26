import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mt-20 mb-10'>
            <div className="container mx-auto">
                <h2 className='text-red-600 text-lg'>Page Not Found</h2>
                <Link to='/'>Go Home</Link>
            </div>
            <img src="https://i.ibb.co/drSQmjn/404.jpg" className='w-full' alt="" />
        </div>
    );
};

export default NotFound;