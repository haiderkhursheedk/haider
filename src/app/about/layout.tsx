import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey & Timeline",
  description: "The timeline and journey of Haider Khursheed — from robotics at age 11 to game development acquisition, co-founding Lixta Network, Komunity, and Home for Builders.",
  alternates: {
    canonical: "https://www.haiderkhursheed.com/about",
  },
  openGraph: {
    title: "Journey & Timeline • Haider Khursheed",
    description: "The timeline and journey of Haider Khursheed — from robotics at age 11 to game development acquisition, co-founding Lixta Network, Komunity, and Home for Builders.",
    url: "https://www.haiderkhursheed.com/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journey & Timeline • Haider Khursheed",
    description: "The timeline and journey of Haider Khursheed — from robotics at age 11 to game development acquisition, co-founding Lixta Network, Komunity, and Home for Builders.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
