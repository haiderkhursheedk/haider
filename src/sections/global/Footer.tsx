import Image from "next/image";
import logoImage from "@/assets/images/footer_logo.png";
import { FaXTwitter, FaInstagram, FaLinkedin,FaGooglePlay } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="py-10 px-4 flex flex-col items-center justify-center mt-8">
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="gap-8 flex flex-col items-center">
                    <div className="md:col-span-2 flex flex-col items-center">
                        <div className="ascii-logo text-xs leading-none whitespace-pre mb-4 flex justify-center">
                            <Image
                                src={logoImage}
                                alt="Lixta Network Logo"
                                className="h-4 w-auto text-black"
                            />
                        </div>
                        
                        <div className="flex items-center gap-4 mt-4">
                            {/* <a 
                                href="https://farcaster.xyz/noiceapp" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-600 transition-colors flex items-center gap-1"
                            >
                                <SiFarcaster className="w-4 h-4" />
                            </a> */}
                            <a 
                                href="https://x.com/komunityapp" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-600 transition-colors"
                            >
                                <FaXTwitter className="w-4 h-4" />
                            </a>
                            <a 
                                href="https://www.instagram.com/komunity.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-600 transition-colors"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/komunityinc/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-600 transition-colors"
                            >
                                <FaLinkedin className="w-4 h-4" />
                            </a>
                            <a 
                                href="https://play.google.com/store/apps/details?id=com.lixtanetwork.komunity" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-600 transition-colors"
                            >
                                <FaGooglePlay className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-10 pt-6 border-t border-black w-full flex flex-col md:flex-row justify-center items-center">
                    <p className="text-xs text-black text-center font-regular">
                        &copy; {new Date().getFullYear()} komunity. All
                        rights reserved.
                    </p>
                </div> */}
            </div>
        </footer>
    );
}