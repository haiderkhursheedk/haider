import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
// import { MickeyHandCursor } from "@/components/ui/MickeyHandCursor";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export const metadata: Metadata = {
    title: "Haider Khursheed • Entrepreneur & Founder of Lixta Network ",
    description: "building cool things",
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-36x36.png', sizes: '36x36', type: 'image/png' },
            { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-icon-touch.png', sizes: '180x180', type: 'image/png' },
        ],
    },

    openGraph: {
        title: "Haider Khursheed • Entrepreneur & Founder of Lixta Network",
        description: "building cool things",
        url: "https://www.haiderkhursheed.com/",
        siteName: "Haider Khursheed • Entrepreneur & Founder of Lixta Network",
        images: [
            {
                url: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/assets/haider.jpg",
                width: 1200,
                height: 630,
                alt: "Haider Khursheed • Entrepreneur & Founder of Lixta Network",
            },
        ],
        type: "website",
    },


};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Dongle&display=swap" rel="stylesheet" />
                <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
            </head>
            <body className={`font-sans bg-black text-neutral-100`}>
                {/* <SmoothCursor cursor={<MickeyHandCursor />} /> */}
                <SmoothCursor />
                <main className="text-neutral-100 bg-black min-h-screen flex flex-col justify-between">
                    <div>
                        <Navbar />
                        <Analytics />
                        {children}
                    </div>
                    <Footer />
                </main>
            </body>
        </html>
    );
}