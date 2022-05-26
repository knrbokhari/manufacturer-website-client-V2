import React from 'react';

const Skills = () => {
    return (
        <div className='px-10'>
            <h2 className='text-center text-2xl my-10'>MY SKILLS</h2>
            <div className="grid gap-y-4 gap-x-10 md:grid-cols-2">

                <div className="mb-1">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-blue-700 dark:text-white">HTML5</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-3.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                </div>

                <div className="mb-1">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-blue-700 dark:text-white">CSS3</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-3.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                </div>

                <div className="mb-1">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-blue-700 dark:text-white">Javascript</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-3.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                </div>

                <div className="mb-1">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-blue-700 dark:text-white">ReactJS</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-3.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                </div>

                <div className="mb-1">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-blue-700 dark:text-white">Firebase</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-3.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                </div>

                <div className="mb-1">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-blue-700 dark:text-white">Express</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-3.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                </div>



                <div className="mb-1">
                    <div className="flex justify-between mb-1">
                        <span className="text-lg font-medium text-blue-700 dark:text-white">Mongodb</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-3.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;