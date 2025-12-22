"use client";

import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Navbar() {
    return (
        <>
            <div className="mt-8">
                <div className=" px-8">
                    <div className="gap-4 rounded-[27px] md:rounded-full flex items-end justify-end py-2">
                    <a 
                                href="https://x.com/khaiderksh/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-600 transition-colors"
                            >
                                <FaXTwitter className="w-4 h-4" />
                            </a>
                            <a 
                                href="https://www.instagram.com/haiderkhursheedk/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-600 transition-colors"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/haiderkhursheedk/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-600 transition-colors"
                            >
                                <FaLinkedin className="w-4 h-4" />
                            </a>
                    </div>
                </div>
            </div>
        </>
    );
}