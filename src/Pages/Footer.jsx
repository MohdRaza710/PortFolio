import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-scroll';

function Footer() {
    // Define your navigation links
    const navLinks = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Project" },
        { id: 4, text: "Experiance" },
        { id: 5, text: "Contact" },
    ];

    // Define social media links and icons
    const socialLinks = [
        { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61575247876033', icon: FaFacebook, color: 'hover:text-blue-600' },
        { name: 'Twitter', href: 'https://x.com/MohammedRa78084', icon: FaTwitter, color: 'hover:text-blue-400' }, // Replace '#' with actual link
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-raza-92aaa4398/', icon: FaLinkedinIn, color: 'hover:text-blue-700' }, // Replace '#' with actual link
    ];

    // Contact Details
    const email = 'mrmraza.710@gmail.com';
    const phone = '+261 38 69 976 00';

    return (
        <>
            <hr className="border-gray-700" />
            <footer className="bg-gray-900 text-gray-300 py-10">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Main Footer Content: Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">

                        {/* 1. Logo/Branding Section (Example) */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">Mohammed Raza</h3>
                            <p className="text-sm">
                                Build modern and responsive web applications with a focus on user experience and performance.
                            </p>
                        </div>

                        {/* 2. Navigation Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                            <ul className="space-y-2">
                                {navLinks.map(({ id, text }) => (
                                    <li key={id} className="text-white hover:text-blue-500 cursor-pointer transition">
                                        <Link to={text} smooth={true} duration={500} offset={-70} activeClass="text-blue-600">
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. Contact Information */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    Email: <a href={`mailto:${email}`} className="hover:text-white transition duration-200">
                                        {email}
                                    </a>
                                </li>
                                <li>
                                    Phone: <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition duration-200">
                                        {phone}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* 4. Social Media */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
                            <div className="flex space-x-5">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className={`${social.color} transition duration-300 text-gray-400`}
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;