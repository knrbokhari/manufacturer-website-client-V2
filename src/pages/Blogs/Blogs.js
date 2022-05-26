import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-28 mb-14 max-w-7xl text-xl container mx-auto text-justify'>
            <h2 className='text-2xl text-primary'>1. How will you improve the performance of a React Application?</h2>
            <p>
                <ul>
                    <li className='pl-5'>The simplest way to avoid this problem is to avoid mutating values that you are using as props or state.</li>
                    <li className='pl-5'>Keeping component state local where necessary.</li>
                    <li className='pl-5'>Code-splitting in React using dynamic import().</li>
                    <li className='pl-5'>Profiling Components with the DevTools Profiler.</li>
                    <li className='pl-5'>Avoid Reconciliation.</li>
                </ul>
            </p>
            <h2 className='text-2xl text-primary'>2. What are the different ways to manage a state in a React application?</h2>
            <p>There are four main types of state you need to properly manage in your React apps:</p>
            <p>
                <ul>
                    <li className='pl-5'> <span className='font-bold'>Local state:</span> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.</li>
                    <li className='pl-5'> <span className='font-bold'>Global state:</span> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</li>
                    <li className='pl-5'> <span className='font-bold'>Server state:</span> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</li>
                    <li className='pl-5'> <span className='font-bold'>URL state:</span> Data that exists on our URLs, including the pathname and query parameters</li>
                </ul>
            </p>
            <h2 className='text-2xl text-primary'>3. How does prototypical inheritance work?</h2>
            <p className='pl-5'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

            <h2 className='text-2xl text-primary'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p className='pl-5'>
                i give "url/:name" to the server side. <br />
                then i get it value from "req.params.name". <br />
                then i filter it "name: name" and give it to "collections.findOne(filter) <br />
                and then it is given using "res.send(result)"  to client side. <br />
            </p>
            <h2 className='text-2xl text-primary'>5. What is a unit test? Why should I write unit tests?</h2>
            <p className='pl-5'>A unit test is a way to test a unit, the smallest code in a system that can logically be isolated. This is a function, a subroutine, a procedure, or a property in most programming languages.</p>
            <p className='pl-5'>Why should I write unit tests- Unit Tests allows you to make big changes to code quickly. Unit Tests give you instant visual feedback. Unit Tests help you really understand the design of the code you are working on.</p>
        </div>
    );
};

export default Blogs;