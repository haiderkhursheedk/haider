import Link from "next/link";
import Image from "next/image";

export default function HomeForBuildersPage() {
    return (
        <article className="prose-custom w-full max-w-none pb-16">
            <div className="mb-6">
                <h1>home for builders</h1>
                <p className="text-lg text-muted-foreground font-medium mt-2">
                    an internet-first institution for founders and builders.
                </p>
            </div>

            <p>
                home for builders combines community, founder education, builder infrastructure and long-term accountability into one ecosystem.
            </p>
            <p>
                the goal is to help founders move from idea to product to startup.
            </p>

            <div className="my-10 border-t border-border pt-8">
                <h2>core pillars</h2>
                <ul>
                    <li>founder residency</li>
                    <li>founder conversations</li>
                    <li>meetups & builder sprints</li>
                    <li>cohorts & community</li>
                    <li>sage (operating system)</li>
                </ul>
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>mission</h2>
                <p>
                    create the place every ambitious builder wants to belong to. it's about providing the infrastructure that removes friction from building.
                </p>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">related</p>
                <div className="flex flex-col space-y-2">
                    <Link href="/projects/lixta-network" className="internal-link block w-fit">lixta network — venture studio behind it</Link>
                    <Link href="/" className="internal-link block w-fit">about me</Link>
                </div>
            </div>
        </article>
    );
}
