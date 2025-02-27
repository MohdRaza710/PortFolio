import React from 'react'

function About() {
    return (
        <div
            name="About"
            className="max-w-screen-lg mx-auto px-6 py-16 text-center"
        >
            <div className="bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    I'm <span className="font-semibold text-gray-900">Raza</span>, a web developer with a passion for creating intuitive and dynamic user experiences.
                    I specialize in front-end development using technologies like <span className="font-semibold text-blue-600">React</span>,
                    <span className="font-semibold text-teal-500"> Tailwind CSS</span>, and <span className="font-semibold text-yellow-500">JavaScript</span>, and I am always eager to learn new skills to improve my craft.
                    I enjoy building applications that are both functional and visually appealing, and I’m
                    always looking for opportunities to expand my knowledge and expertise.
                </p>
            </div>
        </div>
    )
}

export default About;
