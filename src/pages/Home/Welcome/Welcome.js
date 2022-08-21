import React from 'react';

const Welcome = () => {
    return (
        <div className='container mx-auto lg:px-12 my-14'>
            <div className="grid gap-7 lg:grid-cols-2 items-center">
                <div className="">
                    <h3 className='text-5xl'>Welcome to</h3>
                    <h2 className='text-6xl text-primary mb-7'>Manufactory</h2>
                    <p className='mb-3 text-lg text-gray-500'>When you give to Our Charity, know your donation is making a difference Whether you are supporting one our Signature Programs or our carefully curated list of Gifts That Give More, our ut professional staff.</p>
                    <p className='mb-7 text-lg text-gray-500'>We partner with over 320 amazing ut projects worldwide, and have given over $150 million in cash and product grants to other groups.</p>
                    <div className="mb-10">
                        <p className='text-lg'>Naeem Rayhan</p>
                        <p className='text-lg text-primary'>CEO & Founder</p>
                    </div>
                </div>
                <img className='hidden lg:block ' src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" alt="" />
            </div>
            <div className=" grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-12">
                <div className="p-10 border rounded-2xl text-center">
                    <img className='w-20 mx-auto mb-2' src="https://i.ibb.co/zbLY4Rr/fast-delivery.png" alt="" />
                    <h2 className='text-primary text-2xl mb-1'>Punctual Delivery time</h2>
                    <p className='text-lg'>How this mistaken idea denouncing pleasure and praising pain was born will give you a complete.</p>
                </div>
                <div className="p-10 border rounded-2xl text-center">
                    <img className='w-20 mx-auto mb-2' src="https://i.ibb.co/6Jgbjb0/brainstorm.png" alt="" />
                    <h2 className='text-primary text-2xl mb-1'>Team Of Professionals</h2>
                    <p className='text-lg'>Again is there anyone who loves or pursues and desires obtain pain itself, because it is pain occasionally.</p>
                </div>
                <div className="p-10 border rounded-2xl text-center">
                    <img className='w-20 mx-auto mb-2' src="https://i.ibb.co/mv3CtgF/project-management.png" alt="" />
                    <h2 className='text-primary text-2xl mb-1'>Smart Technology</h2>
                    <p className='text-lg'>The master of human happiness no one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
                </div>
                <div className="p-10 border rounded-2xl text-center">
                    <img className='w-20 mx-auto mb-2' src="https://i.ibb.co/h7W1Lm6/booking.png" alt="" />
                    <h2 className='text-primary text-2xl mb-1'>Easy and Affortable</h2>
                    <p className='text-lg'>Ever undertakes laborious physical exercise, except to obtain some sed advantage from it right.</p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;