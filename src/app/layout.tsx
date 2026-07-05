import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sidebar } from "@/components/ui/Sidebar";
import { InteractiveGraph } from "@/components/ui/InteractiveGraph";

export const metadata: Metadata = {
    title: "haider khursheed",
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
        url: "https://www.haiderkhursheed.com/",
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
                <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
            </head>
            <body className={`font-satoshi antialiased overflow-x-hidden`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <main className="min-h-screen w-full flex flex-col md:flex-row bg-background">
                        <Sidebar />
                        <div className="flex-1 min-w-0 px-8 pt-10 pb-16">
                            <div className="max-w-xl w-full">
                                <Analytics />
                                {children}
                            </div>
                        </div>
                        {/* <InteractiveGraph /> */}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}