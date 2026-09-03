import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit & Brand Assets",
  description: "Official press kit, founder bios, high-resolution photography, brand assets, and press contact for Haider Khursheed and Lixta Network.",
  alternates: {
    canonical: "https://www.haiderkhursheed.com/press",
  },
  openGraph: {
    title: "Press Kit & Brand Assets • Haider Khursheed",
    description: "Official press kit, founder bios, high-resolution photography, brand assets, and press contact for Haider Khursheed and Lixta Network.",
    url: "https://www.haiderkhursheed.com/press",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Kit & Brand Assets • Haider Khursheed",
    description: "Official press kit, founder bios, high-resolution photography, brand assets, and press contact for Haider Khursheed and Lixta Network.",
  },
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
