"use client";

export default function Navbar() {
    return (
        <>
            <div className="mt-20">
                <div className="container mx-auto px-4">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full flex items-end justify-end px-4 md:px-6 py-2">
                                                <a 
                            href="https://play.google.com/store/apps/details?id=com.lixtanetwork.komunity" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-neutral-600 text-xs font-medium hover:text-[#FF4D4D] hover:underline whitespace-nowrap"
                        >
                          👉🏻 ( download komunity ) 👈🏻
                        </a>
                    </div>
                </div>
            </div>
            <div className="pb-[86px] md:pb-[98px]"></div>
        </>
    );
}