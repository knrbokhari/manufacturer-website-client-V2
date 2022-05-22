import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='container mx-auto my-14 px-7'>
            <h2 className='text-center text-5xl'>MILLIONS BUSINESS TRUST US</h2>
            <p className='text-center text-xl'>TRY TO UNDERSTAND USERS EXPECTATION</p>
            <div class="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 shadow">

                <div class="py-14 px-12 flex flex-col items-center lg:stat border">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title">Total Comments</div>
                    <div class="stat-value text-primary">25.6K</div>
                    <div class="stat-desc">19% last month</div>
                </div>

                <div class="py-14 px-12 flex flex-col items-center lg:stat border">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-title">Page Views</div>
                    <div class="stat-value text-secondary">2.6M</div>
                    <div class="stat-desc">21% last month</div>
                </div>

                <div class="py-14 px-12 flex flex-col items-center lg:stat border">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <div class="stat-title">Tasks done</div>
                    <div class="stat-value text-primary">86%</div>
                    <div class="stat-desc ">31 tasks remaining</div>
                </div>

                <div class="py-14 px-12 flex flex-col items-center lg:stat border">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div class="stat-title">Happy Clients</div>
                    <div class="stat-value  text-secondary">5.2K</div>
                    <div class="stat-desc">1.2K New Clients</div>
                </div>
            </div>
            <div class="card w-full shadow-xl mt-14 border">
                <div className="card-body grid lg:grid-cols-2">
                    <div class="">
                        <h2 class="card-title text-2xl">Have any question about us or get a products request?</h2>
                        <p>Don`t hesitakte to contact us</p>
                    </div>
                    <div className="card-actions block mx-auto">
                        <button type="submit" className='btn mr-5 btn-primary'>Request For Quote</button>
                        <button type="submit" className='btn btn-secondary'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;