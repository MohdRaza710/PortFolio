import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <hr className="border-gray-300" />
            <footer className="bg-gray-900 text-white py-6">
                <div className="max-w-screen-lg mx-auto flex flex-col items-center space-y-4">

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                            <FaFacebook size={28} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            <FaTwitter size={28} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                            <FaInstagram size={28} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                            <FaLinkedinIn size={28} />
                        </a>
                    </div>

                    {/* Footer Text */}
                    <div className="text-center">
                        <p className="text-gray-400 text-sm">&copy; 2025 Your Company. All rights reserved.</p>
                        <p className="text-gray-400 text-sm">Supportive Partner ❤️ Raza</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
