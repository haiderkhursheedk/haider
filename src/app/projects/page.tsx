import Link from "next/link";

export default function ProjectsPage() {
    return (
        <article className="prose-custom w-full max-w-none pb-16">
            <h1>ventures</h1>
            <p>
                a running list of everything i've built, am building, or have shut down.
                most of these are bets on things i believe will matter.
            </p>

            <div className="my-10 border-t border-border pt-8">
                <h2>currently building</h2>
                <div className="space-y-6 mt-4">
                    <div>
                        <Link href="/projects/aeomi" className="internal-link text-lg font-semibold">aeomi</Link>
                        <p className="text-muted-foreground text-sm mt-1">
                            ai system focused on memory intelligence. remembers, understands, and evolves with people over time.
                        </p>
                    </div>
                    <div>
                        <Link href="/projects/mia" className="internal-link text-lg font-semibold">mia</Link>
                        <p className="text-muted-foreground text-sm mt-1">
                            an ai companion that feels more human. not just a tool — something that actually knows you.
                        </p>
                    </div>
                    <div>
                        <Link href="/projects/lixta-labs" className="internal-link text-lg font-semibold">lixta labs</Link>
                        <p className="text-muted-foreground text-sm mt-1">
                            holding company for all ventures. announced in january 2026.
                        </p>
                    </div>
                    <div>
                        <Link href="/projects/lixta-network" className="internal-link text-lg font-semibold">lixta network</Link>
                        <p className="text-muted-foreground text-sm mt-1">
                            creative studio that helps startups build mvps and tech products. launched 10+ startups. moved from agency to studio model.
                        </p>
                    </div>
                    <div>
                        <Link href="/projects/homeforbuilders" className="internal-link text-lg font-semibold">home for builders</Link>
                        <p className="text-muted-foreground text-sm mt-1">
                            an internet-first institution for founders and builders. helping builders turn ideas into startups.
                        </p>
                    </div>
                    <div>
                        <Link href="/projects/komunity" className="internal-link text-lg font-semibold">komunity</Link>
                        <p className="text-muted-foreground text-sm mt-1">
                            community-driven execution venture.
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>past</h2>
                <div className="space-y-6 mt-4">
                    <div>
                        <Link href="/projects/game-studio" className="internal-link text-lg font-semibold">game dev studio</Link>
                        <p className="text-muted-foreground text-sm mt-1">
                            built robots, made games, worked with 200+ clients. sold to a game publisher in 2023.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}
