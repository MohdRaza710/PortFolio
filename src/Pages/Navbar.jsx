import React, { useState } from "react";
import pic from "/pf.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Project" },
        { id: 4, text: "Experiance" },
        { id: 5, text: "Contact" },
    ];

    return (
        <nav className="w-full fixed top-0 left-0 z-50">
            <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo and Name */}
                <div className="flex items-center space-x-4">
                    <img src={pic} alt="Logo" className="w-12 h-12 rounded-full shadow-lg" />
                    <h1 className="text-2xl font-bold text-gray-800">
                        Raza
                        <p className="text-sm text-gray-600">Web Developer</p>
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 text-lg font-medium">
                    {navItems.map(({ id, text }) => (
                        <li key={id} className="text-gray-700 hover:text-blue-600 cursor-pointer transition">
                            <Link to={text} smooth={true} duration={500} offset={-70} activeClass="text-blue-600">
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div onClick={() => setMenu(!menu)} className="md:hidden text-gray-700 cursor-pointer">
                    {menu ? <IoCloseSharp size={28} /> : <AiOutlineMenu size={28} />}
                </div>
            </div>

            {/* Mobile Navigation */}
            {menu && (
                <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full">
                    <ul className="flex flex-col text-lg font-medium text-center py-6 space-y-4">
                        {navItems.map(({ id, text }) => (
                            <li key={id} className="text-gray-700 hover:text-blue-600 cursor-pointer transition">
                                <Link
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="text-blue-600"
                                    onClick={() => setMenu(false)}
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
