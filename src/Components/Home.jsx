import React from "react";

import pic from "../../public/photo.avif";

import { FaSquareFacebook } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
    return (
        <>
            <div
                name='Home'
                className='max-w-screen-2xl container mx-auto px-4 py-10'
            >
                <section className='flex flex-col items-center justify-center text-center'>
                    <div className='space-y-5'>
                        <span className='text-3xl font-semibold text-gray-700'>Welcome In My Feed</span>
                        <div className='text-4xl font-extrabold text-gray-900 mt-8'>
                            <h1>Hello, I'm a</h1>
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Developer", "Coder", "Programmer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-lg text-gray-600 max-w-lg mx-auto">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet optio vel magni quidem eveniet nihil, quis pariatur officia ea ab magnam dolor illo tenetur molestias praesentium dolorum aliquam est rem?
                        </p>
                        {/* Social Media Icons */}
                        <div>
                            <h1 className='text-xl text-gray-800 mt-6'>Available on</h1>
                            <ul className="flex justify-center space-x-5 mt-4">
                                <li>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaSquareFacebook className="text-4xl text-blue-600 hover:text-blue-800 cursor-pointer transition-colors" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10">
                        <img src={pic} alt="Profile" className="w-full max-w-md h-auto rounded-full shadow-lg mx-auto" />
                    </div>
                </section>
            </div>
            <hr className="my-10 border-gray-300" />
        </>
    )
}

export default Home;
