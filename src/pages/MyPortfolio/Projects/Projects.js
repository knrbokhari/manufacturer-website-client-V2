import React from 'react';

const Projects = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-10'>Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10">
                <div className="card card-compact max-w-xl bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/rKP9mVB/Screenshot-from-2022-05-26-21-12-25.png" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-center gap-5 w-full'>
                            <a href='https://github.com/programming-hero-web-course-4/product-analysis-website-knrbokhari' target='_blank' className='btn btn-ml'>Code link</a>
                            <a href='https://best-laptop-of-2022.netlify.app/' target='_blank' className='btn btn-ml'> live website</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact max-w-xl bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/hFtsXK3/Screenshot-from-2022-05-26-21-12-12.png" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-center gap-5 w-full'>
                            <a href='https://github.com/programming-hero-web-course-4/independent-service-provider-knrbokhari' target='_blank' className='btn btn-ml'>Code link</a>
                            <a href='https://independent-service-prov-8136a.web.app/' target='_blank' className='btn btn-ml'> live website</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact max-w-xl bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/CHRp8Rg/Screenshot-from-2022-05-26-21-07-23.png" className='w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-center gap-5 w-full'>
                            <a href='https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-knrbokhari' target='_blank' className='btn btn-ml'>Code link</a>
                            <a href='https://inventory-management-655e0.web.app/' target='_blank' className='btn btn-ml'> live website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;