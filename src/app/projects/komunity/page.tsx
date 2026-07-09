import Link from "next/link";
import Image from "next/image";

export default function KomunityPage() {
    return (
        <article className="prose-custom w-full max-w-none pb-16">
            <div className="mb-6">
                <h1>komunity</h1>
                <p className="text-lg text-muted-foreground font-medium mt-2">
                    a new age platform for developers, creators, and founders.
                </p>
            </div>

            <p>
                komunity is a new age platform built for developers, creators, and startup founders to build, showcase, and get hired, all in one ecosystem. in a world where traditional hiring depends on resumes and outdated metrics, komunity flips the game by creating a space where your work becomes your identity.
            </p>

            <div className="my-10 border-t border-border pt-8">
                <h2>funding</h2>
                <ul className="space-y-2">
                    <li><span className="font-semibold">total raised:</span> $ 1.5K</li>
                    <li><span className="font-semibold">claimed:</span> $ 1.5K</li>
                    <li><span className="font-semibold">unclaimed:</span> $ 0</li>
                </ul>
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>vision</h2>
                <p>
                    our vision is to redefine how people build and connect in the digital world.
                </p>
                <p>
                    we're creating an open ecosystem where developers, founders, and creative minds come together, not just to network, but to build the future of technology, together.
                </p>
                <p>
                    in the next 3 years, komunity aims to become the default platform for the global builder economy, empowering millions of creators and startups to collaborate, validate, and scale without boundaries.
                </p>
                <p>
                    komunity isn't just another app, it's the home for builders, a living ecosystem where your growth, connections, and opportunities are powered by your creativity and consistency.
                </p>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">related</p>
                <div className="flex flex-col space-y-2">
                    <Link href="https://www.komunity.dev/" className="external-link block w-fit" target="_blank" rel="noopener noreferrer">komunity.dev</Link>
                    <Link href="/projects/homeforbuilders" className="internal-link block w-fit">home for builders</Link>
                    <Link href="/" className="internal-link block w-fit">about me</Link>
                </div>
            </div>
        </article>
    );
}
