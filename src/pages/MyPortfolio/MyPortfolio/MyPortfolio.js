import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const MyPortfolio = () => {
    return (
        <div className='my-28 container mx-auto'>
            <h2 className='text-center text-2xl mb-10'>My Portfolio</h2>
            <AboutMe></AboutMe>
            <Skills />
            <Education />
            <Projects />
        </div>
    );
};

export default MyPortfolio;