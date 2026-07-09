import Link from "next/link";

export default function GameStudioPage() {
    return (
        <article className="prose-custom w-full max-w-none pb-16">
            <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">game studio · founded early · exited 2023</p>
                <h1>game dev studio</h1>
                <p className="text-lg text-muted-foreground font-medium mt-2">
                    where it all started. built it, ran it, sold it.
                </p>
            </div>

            <p>
                before ai, before lixta, before any of it — i was building games and robots.
            </p>
            <p>
                i started a game development company early, worked with 200+ clients, and eventually sold it to a game publisher in 2023.
            </p>

            <div className="my-10 border-t border-border pt-8">
                <h2>what we built</h2>
                <ul>
                    <li>custom game experiences for brands and studios</li>
                    <li>internal tools and pipelines for game production</li>
                    <li>early robotics projects — hardware, software, both</li>
                    <li>client work across 200+ projects</li>
                </ul>
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>what i learned</h2>
                <p>
                    this was the grind phase. taking every client, shipping fast, learning the difference between building for yourself and building for someone else's vision.
                </p>
                <p>
                    the exit in 2023 taught me more about negotiations, positioning, and valuation than anything i've read since.
                </p>
                <p>
                    most importantly: i learned that selling is a skill. distribution is a skill. and without those, the best product in the world goes nowhere.
                </p>
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>why i moved on</h2>
                <p>
                    games are a craft i respect, but the business felt like running in circles. the exit happened at the right moment — when i had learned what i needed and could build towards what actually excited me.
                </p>
                <p>
                    everything after this has been trying to build systems, not just products.
                </p>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">related</p>
                <div className="flex flex-col space-y-2">
                    <Link href="/" className="internal-link block w-fit">about me</Link>
                    <Link href="/projects" className="internal-link block w-fit">all ventures</Link>
                </div>
            </div>
        </article>
    );
}
