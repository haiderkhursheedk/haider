import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export const viewport: Viewport = {
    themeColor: "#000000",
    colorScheme: "dark",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.haiderkhursheed.com"),
    title: {
        default: "Haider Khursheed • Founder & Chairman of Lixta Network",
        template: "%s • Haider Khursheed",
    },
    description: "Haider Khursheed is the Founder & Chairman of Lixta Network and builds AI-first software. Home for Builders is a community.",
    keywords: [
        "Haider Khursheed",
        "Lixta Network",
        "Home for Builders",
        "Komunity",
        "Entrepreneur",
        "Startup Founder",
        "AI Software",
        "Consumer Technology",
        "Builder",
    ],
    authors: [{ name: "Haider Khursheed", url: "https://www.haiderkhursheed.com" }],
    creator: "Haider Khursheed",
    publisher: "Haider Khursheed",
    alternates: {
        canonical: "https://www.haiderkhursheed.com",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    openGraph: {
        title: "Haider Khursheed • Founder & Chairman of Lixta Network",
        description: "Haider Khursheed is the Founder & Chairman of Lixta Network and builds AI-first software. Home for Builders is a community.",
        url: "https://www.haiderkhursheed.com/",
        siteName: "Haider Khursheed",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderisyours.png",
                width: 1200,
                height: 630,
                alt: "Haider Khursheed • Founder & Chairman of Lixta Network",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Haider Khursheed • Founder & Chairman of Lixta Network",
        description: "Haider Khursheed is the Founder & Chairman of Lixta Network and builds AI-first software. Home for Builders is a community.",
        site: "@khaiderksh",
        creator: "@khaiderksh",
        images: ["https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderisyours.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    const schemaGraph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://www.haiderkhursheed.com/#person",
                "name": "Haider Khursheed",
                "alternateName": "Abdul Rehman Khursheed Khan",
                "jobTitle": "Founder & Chairman",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Lixta Network",
                    "url": "https://lixtanetwork.com"
                },
                "founderOf": [
                    {
                        "@type": "Organization",
                        "name": "Lixta Network",
                        "url": "https://lixtanetwork.com"
                    },
                    {
                        "@type": "Organization",
                        "name": "Home for Builders",
                        "url": "https://homeforbuilders.com"
                    },
                    {
                        "@type": "Organization",
                        "name": "Komunity",
                        "url": "https://komunity.dev",
                        "dissolutionDate": "2026-04"
                    }
                ],
                "description": "Founder & Chairman of Lixta Network, a studio that builds brands, websites and apps and turns manual work into AI-first software. Founded Lixta Network with Abdullah Yasin Shaikh. Founder of the Home for Builders community.",
                "url": "https://www.haiderkhursheed.com",
                "image": "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderisyours.png",
                "sameAs": [
                    "https://www.linkedin.com/in/haiderkhursheedk/",
                    "https://x.com/khaiderksh/",
                    "https://www.instagram.com/haiderkhursheedk/",
                    "https://www.youtube.com/@haiderkhursheedk/"
                ],
                "knowsAbout": [
                    "Entrepreneurship",
                    "Startups",
                    "AI-first software",
                    "Software product development"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://www.haiderkhursheed.com/#website",
                "url": "https://www.haiderkhursheed.com",
                "name": "Haider Khursheed",
                "description": "Founder and entrepreneur building consumer technology, AI-first software, and startups.",
                "publisher": {
                    "@id": "https://www.haiderkhursheed.com/#person"
                }
            },
            {
                "@type": "ProfilePage",
                "@id": "https://www.haiderkhursheed.com/#profilepage",
                "url": "https://www.haiderkhursheed.com",
                "name": "Haider Khursheed • Founder & Chairman of Lixta Network",
                "mainEntity": {
                    "@id": "https://www.haiderkhursheed.com/#person"
                }
            }
        ]
    };

    return (
        // <html lang="en" className="dark">
        <html lang="en" className="dark">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaGraph),
                    }}
                />
            </head>
            {/* <body className={`font-sans bg-black text-neutral-100`}> */}
            <body className={`font-sans bg-black text-neutral-100`}>
                {gaId && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${gaId}', {
                                    page_path: window.location.pathname,
                                });
                            `}
                        </Script>
                    </>
                )}
                {/* <main className="text-neutral-100 bg-black min-h-screen flex flex-col justify-between"> */}
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
