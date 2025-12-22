import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";


export const metadata: Metadata = {
    title: "abdul rehman",
    description: "building cool things",
    
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "32x32" },
            { url: "/favicon.ico", sizes: "16x16" },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* <link 
                    href="https://api.fontshare.com/v2/css?f[]=gambarino@400&display=swap" 
                    rel="stylesheet" 
                /> */}

                {/* <link 
                href="https://api.fontshare.com/v2/css?f[]=outfit@100,300,400,500,600,700&display=swap" 
                rel="stylesheet"/> */}
{/* 
                <link 
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" 
                rel="stylesheet"/> */}
{/* 
<link 
href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" 
rel="stylesheet"/> */}

<link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet"/>


            </head>
            <body className={`font-satoshi`}>
                <main className="text-black bg-white">
                    <Analytics/>
                    {children}
                </main>
            </body>
        </html>
    );
}