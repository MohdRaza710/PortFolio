import React from 'react'
import javascript from "/javascript.png";
import python from "/python.webp";
import mongoDB from "/mongodb.jpg";
import express from "/express.png";
import reactjs from "/reactjs.png";
import nodejs from "/node.png";

function PortFolios() {
    const cardItem = [
        {
          id: 1,
          logo: mongoDB,
          name: "MongoDB",
        },
        {
          id: 2,
          logo: express,
          name: "Express",
        },
        {
          id: 3,
          logo: reactjs,
          name: "ReactJS",
        },
        {
          id: 4,
          logo: nodejs,
          name: "NodeJS",
        },       
        {
          id: 5,
          logo: javascript,
          name: "JavaScript",
        },
      ];
      
    return (
        <div name="PortFolio" className="max-w-screen-2xl container mx-auto px-4 py-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">PortFolio</h1>
                <span className="text-lg text-gray-600">Featured Projects</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                {cardItem.map(({ id, logo, name }) => (
                  <div key={id} className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center space-y-4 transition-transform transform hover:scale-105">
                    <img src={logo} alt={name} className="w-20 h-20 object-contain" />
                    <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                  </div>
                ))}
            </div>
        </div>
    )
}

export default PortFolios;
