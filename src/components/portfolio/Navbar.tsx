"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Writing", href: "/writing" },
    { label: "Press", href: "/press" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isActive = (href: string) => pathname === href;

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className=" top-0 left-0 right-0 transition-all duration-300"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between mt-6">
                    {/* <Link
                        href="/"
                        className="font-sans text-sm font-semibold text-neutral-100 tracking-tight hover:text-white transition-colors duration-200"
                    >
                        Haider Khursheed
                        <span className="text-neutral-600">.</span>
                    </Link> */}

                    <div className="flex items-center gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-xs transition-colors duration-200 ${isActive(link.href)
                                    ? "text-neutral-100 underline underline-offset-4 decoration-neutral-400"
                                    : "text-neutral-400 hover:text-neutral-100"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
}