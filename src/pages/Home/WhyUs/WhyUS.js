import React from 'react';

const WhyUS = () => {
    return (
        <div>
            <h2 className='text-5xl mb-14 text-center'>Why Choose Us</h2>
            <div className="grid lg:grid-cols-2 items-center gap-8">
                <div className="p-10">
                    <div className="flex mb-5">
                        <img className='w-20 h-20' src="https://i.ibb.co/NpKHvx5/windmill.png" alt="" />
                        <div className="ml-5">
                            <h3 className='text-2xl'>Clean Unpolluted</h3>
                            <p className='text-gray-400 text-lg'>Again is there anyone who loves or pursues or desires obtain pain of itself, because it is pain, but because occasionally.</p>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <img className='w-20 h-20' src="https://i.ibb.co/hYWTsBQ/stopwatch.png" alt="" />
                        <div className="ml-5">
                            <h3 className='text-2xl'>Lasting & Long Term</h3>
                            <p className='text-gray-400 text-lg'>Who chooses to enjoy a pleasure that has no or one who avoids a pain that produces no resultant pleasure.</p>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <img className='w-20 h-20' src="https://i.ibb.co/sqV4VzZ/piston.png" alt="" />
                        <div className="ml-5">
                            <h3 className='text-2xl'>Easy and Affortable</h3>
                            <p className='text-gray-400 text-lg'>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give complete.</p>
                        </div>
                    </div>

                </div>
                <div className="p-10">
                    <div className="mb-5">
                        <div className="flex justify-between mb-1">
                            <span className="text-xl font-medium text-black dark:text-white">Production</span>
                            <span className="text-xl font-medium text-black dark:text-white">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-gray-500 h-3.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div><div className="mb-5">
                        <div className="flex justify-between mb-1">
                            <span className="text-xl font-medium text-black dark:text-white">EPC Works</span>
                            <span className="text-xl font-medium text-black dark:text-white">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-gray-500 h-3.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                    </div><div className="mb-5">
                        <div className="flex justify-between mb-1">
                            <span className="text-xl font-medium text-black dark:text-white">Customer Satisfaction</span>
                            <span className="text-xl font-medium text-black dark:text-white">90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-gray-500 h-3.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                    </div><div className="mb-5">
                        <div className="flex justify-between mb-1">
                            <span className="text-xl font-medium text-black dark:text-white">Utilizaion Rate</span>
                            <span className="text-xl font-medium text-black dark:text-white">100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-gray-500 h-3.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 
// 
// 

export default WhyUS;