import React from 'react';
import javascript from "/javascript.png";
import reactjs from "/reactjs.png";
import html from "/html.png";
import css from "/css.jpg";

function Experience() {
    const experienceItems = [
        {
            id: 1,
            logo: javascript,
            name: "JavaScript"
        },
        {
            id: 2,
            logo: html,
            name: "HTML"
        },
        {
            id: 3,
            logo: css,
            name: "CSS"
        },
        {
            id: 4,
            logo: reactjs,
            name: 'ReactJs'
        }
    ];

    return (
        <div name="Experiance" className="max-w-screen-lg mx-auto px-6 py-16 text-center">
            {/* Title Section */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-gray-800">Experience</h1>
                <p className="text-lg text-gray-600 mt-2">I've more than 6 months of experience in these technologies:</p>
            </div>

            {/* Experience Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {experienceItems.map(({ id, logo, name }) => (
                    <div key={id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4 transition-transform transform hover:scale-105">
                        <img src={logo} alt={name} className="w-20 h-20 object-contain" />
                        <div className="text-xl font-semibold text-gray-800">{name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
