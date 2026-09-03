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
        default: "Haider Khursheed • Entrepreneur & Founder of Lixta Network",
        template: "%s • Haider Khursheed",
    },
    description: "Haider Khursheed is a founder and entrepreneur building consumer technology, AI-first software, and startups. Co-founder of Lixta Network and Home for Builders.",
    keywords: [
        "Haider Khursheed",
        "Lixta Network",
        "Home for Builders",
        "Aeomi",
        "Komunity",
        "Entrepreneur",
        "Startup Founder",
        "AI Software",
        "Venture Foundry",
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
        title: "Haider Khursheed • Entrepreneur & Founder of Lixta Network",
        description: "Haider Khursheed is a founder and entrepreneur building consumer technology, AI-first software, and startups. Co-founder of Lixta Network and Home for Builders.",
        url: "https://www.haiderkhursheed.com/",
        siteName: "Haider Khursheed",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/haiderisyours.png",
                width: 1200,
                height: 630,
                alt: "Haider Khursheed • Entrepreneur & Founder of Lixta Network",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Haider Khursheed • Entrepreneur & Founder of Lixta Network",
        description: "Haider Khursheed is a founder and entrepreneur building consumer technology, AI-first software, and startups. Co-founder of Lixta Network and Home for Builders.",
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
                "jobTitle": "Founder & Entrepreneur",
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
                        "url": "https://komunity.dev"
                    },
                    {
                        "@type": "Organization",
                        "name": "Aeomi",
                        "url": "https://aeomi.me"
                    }
                ],
                "description": "Founder and entrepreneur building consumer technology, AI-first software, and startups at the intersection of media and technology. Co-founder of Lixta Network.",
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
                    "Consumer Technology",
                    "Artificial Intelligence",
                    "Agentic AI",
                    "Media Technology",
                    "Creative Studios",
                    "Startups"
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
                "name": "Haider Khursheed • Entrepreneur & Founder of Lixta Network",
                "mainEntity": {
                    "@id": "https://www.haiderkhursheed.com/#person"
                }
            }
        ]
    };

    return (
        <html lang="en" className="dark">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaGraph),
                    }}
                />
            </head>
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