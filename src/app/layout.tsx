import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";


export const metadata: Metadata = {
    title: "haider",
    description: "building cool things",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "32x32" },
            { url: "/favicon.ico", sizes: "16x16" },
        ],
    },
    openGraph: {
        title: "haider",
        description: "building cool things",
        url: "hthttps://www.haiderkhursheed.com/",
        siteName: "haider",
        images: [
            {
                url: "https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/haider.jpg",
                width: 1200,
                height: 630,
                alt: "haider - building cool things",
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
        <html lang="en">
            <head>
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