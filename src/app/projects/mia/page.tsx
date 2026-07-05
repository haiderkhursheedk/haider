import Link from "next/link";

export default function MiaPage() {
    return (
        <article className="prose-custom w-full max-w-none pb-16">
            <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">product · 2026 — present</p>
                <h1>mia</h1>
                <p className="text-lg text-muted-foreground font-medium mt-2">
                    an ai companion that actually knows you.
                </p>
            </div>

            <p>
                most ai feels like a search engine. you ask, it answers, you close the tab. there's no relationship. no continuity. no sense that it understands you as a person.
            </p>
            <p>
                mia is built to be different.
            </p>

            <div className="my-10 border-t border-border pt-8">
                <h2>what it is</h2>
                <p>
                    mia is an ai companion — not just a tool, but something that genuinely builds context around who you are, what you care about, and how you think.
                </p>
                <p>
                    it's built on the <Link href="/projects/aeomi" className="internal-link">aeomi</Link> memory stack, which means every conversation feeds into a growing model of you — your preferences, your patterns, your life.
                </p>
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>what makes it different</h2>
                <ul>
                    <li>it remembers — conversations, preferences, patterns</li>
                    <li>it gets more useful over time, not less</li>
                    <li>it's designed to feel human, not robotic</li>
                    <li>it's private — your memory stays yours</li>
                </ul>
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>the longer vision</h2>
                <p>
                    people don't need another chatbot. they need something that grows with them.
                </p>
                <p>
                    mia is the first step toward building ai that doesn't just answer questions — but actually understands the person asking them.
                </p>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">related</p>
                <div className="flex flex-col space-y-2">
                    <Link href="/projects/aeomi" className="internal-link block w-fit">aeomi — the memory layer powering mia</Link>
                    <Link href="/projects/lixta-labs" className="internal-link block w-fit">lixta labs — holding company</Link>
                </div>
            </div>
        </article>
    );
}
