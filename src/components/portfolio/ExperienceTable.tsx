"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface ExperienceItem {
    year: string;
    role: string;
    image: string;
    company: string;
    location: string;
    tenure: string;
    additionalImages?: string[];
}

const experiences: ExperienceItem[] = [
    {
        year: "2026",
        role: "Founder & AI Researcher",
        company: "Aeomi",
        location: "Stealth",
        tenure: "2026 — Present",
        image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
        additionalImages: [
            "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
            "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
            "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
        ],
    },
    {
        year: "2024",
        role: "Founder & Managing Director",
        company: "Lixta Labs Holding",
        location: "Global",
        tenure: "2024 — Present",
        image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
        additionalImages: [
            "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
            "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
        ],
    },
    {
        year: "2024",
        role: "Founder & Lead",
        company: "Lixta Network & Komunity",
        location: "Remote",
        tenure: "2024 — Present",
        image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
        additionalImages: [
            "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
        ],
    },
    {
        year: "2023",
        role: "Founder & CEO (Acquired)",
        company: "Game Studio",
        location: "200+ Clients",
        tenure: "Acquired 2023",
        image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
        additionalImages: [
            "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
            "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
            "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
        ],
    },
    {
        year: "2011",
        role: "Robotics Builder & Pitcher",
        company: "IIT Bombay Demo",
        location: "Mumbai",
        tenure: "Age 11",
        image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
        additionalImages: [
            "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/homeforbuilders.png",
        ],
    },
];

export default function ExperienceTable() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="my-12">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
                    Career & Ventures
                </h2>
                <span className="text-xs text-neutral-400">Just love what i do</span>
            </div>

            <div className="divide-y divide-neutral-200/50 dark:divide-neutral-800/50">
                {experiences.map((item, idx) => (
                    <div
                        key={idx}
                        className="group"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex items-center justify-between py-3.5 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/50 transition-all duration-300 cursor-pointer group-hover:pl-4 group-hover:pr-2">
                            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                                {item.image && (
                                    <div className="relative w-20 h-20 sm:w-14 sm:h-14 shrink-0 overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-2">
                                        <Image
                                            src={item.image}
                                            alt={item.company}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            sizes="56px"
                                        />
                                    </div>
                                )}

                                <div className="flex flex-col min-w-0">
                                    <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 shrink-0 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 group-hover:translate-x-1">
                                        {item.role}
                                    </span>
                                    <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate transition-colors duration-300 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 group-hover:translate-x-1">
                                        · {item.company}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 font-mono text-xs text-neutral-500 dark:text-neutral-400 shrink-0 transition-all duration-300 group-hover:translate-x-1">
                                <span className="hidden md:inline text-neutral-400">{item.location}</span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 transition-all duration-300 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 group-hover:scale-105">
                                    {item.tenure}
                                </span>
                            </div>
                        </div>

                        {hoveredIndex === idx && item.additionalImages && item.additionalImages.length > 0 && (
                            <div
                                className="px-4 pb-4 pt-2 bg-neutral-50/50 dark:bg-neutral-900/30 overflow-hidden"
                                style={{
                                    animation: 'slideDown 0.4s ease-out forwards',
                                }}
                            >
                                <style>{`
                                    @keyframes slideDown {
                                        from {
                                            opacity: 0;
                                            max-height: 0;
                                            transform: translateY(-10px);
                                        }
                                        to {
                                            opacity: 1;
                                            max-height: 200px;
                                            transform: translateY(0);
                                        }
                                    }
                                `}</style>
                                <div className="flex gap-3 items-end">
                                    {item.additionalImages.map((img, imgIdx) => {
                                        const rotation = imgIdx * 3 - 3;
                                        return (
                                            <div
                                                key={imgIdx}
                                                className="relative shrink-0 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-10"
                                                style={{
                                                    width: '120px',
                                                    height: imgIdx === 0 ? '120px' : imgIdx === 1 ? '100px' : '80px',
                                                    transform: `rotate(${rotation}deg)`,
                                                    marginLeft: imgIdx > 0 ? '-10px' : '0',
                                                    opacity: 0,
                                                    animation: `fadeInUp 0.4s ease-out ${imgIdx * 0.08}s forwards`,
                                                }}
                                            >
                                                <style>{`
                                                    @keyframes fadeInUp {
                                                        from {
                                                            opacity: 0;
                                                            transform: translateY(15px) rotate(${rotation}deg);
                                                        }
                                                        to {
                                                            opacity: 1;
                                                            transform: translateY(0) rotate(${rotation}deg);
                                                        }
                                                    }
                                                `}</style>
                                                <Image
                                                    src={img}
                                                    alt={`${item.company} ${imgIdx + 1}`}
                                                    fill
                                                    className="object-cover transition-transform duration-300 hover:scale-110"
                                                    sizes="120px"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}