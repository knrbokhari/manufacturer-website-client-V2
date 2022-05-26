import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <div className="hero shadow-lg rounded-lg border">
                <div className="hero-content flex-col justify-center md:flex-row">
                    <img src="https://i.ibb.co/N77nz53/100028-1.jpg" className="max-w-full md:w-1/2 rounded-lg" alt='' />
                    <div>
                        <h3 className='text-3xl mb-2'>I am <span className='text-violet-600'>Kazi Naeem Rayhan</span></h3>
                        <div className="text-xl">
                            <ul>
                                <li><b className='inline-block w-40'>Full Name</b> : Kazi Naeem Rayhan</li>
                                <li><b className='inline-block w-40'>Email Address</b> : KazinaeemRayhan@gmail.com</li>
                                <li><b className='inline-block w-40'>Age</b> : 23 Years</li>
                                <li><b className='inline-block w-40'>Last Educational</b> : Diploma in Computer Technology.</li>
                                <li><b className='inline-block w-40'>Languages</b> : Bangla, English.</li>
                                <li><b className='inline-block w-40'>Address</b> : Dhaka, Bangladesh.</li>
                            </ul>
                        </div>
                        <button className='btn btn-sm btn-primary mt-3'>DOWNLOAD CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;