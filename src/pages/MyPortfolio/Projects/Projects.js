import React from 'react';

const Projects = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-10'>Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10">
                <div className="card card-compact max-w-xl bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-center gap-5 w-full'>
                            <button className='btn btn-ml'>live</button>
                            <button className='btn btn-ml'>Code</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact max-w-xl bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-center gap-5 w-full'>
                            <button className='btn btn-ml'>live</button>
                            <button className='btn btn-ml'>Code</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact max-w-xl bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-center gap-5 w-full'>
                            <button className='btn btn-ml'>live</button>
                            <button className='btn btn-ml'>Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;