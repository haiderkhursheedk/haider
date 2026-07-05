import Link from "next/link";
import Image from "next/image";

export default function AeomiPage() {
    return (
        <article className="prose-custom w-full max-w-none pb-16">
            <div className="mb-6">
                <div className="mt-8 overflow-hidden border border-border">
                    <Image
                        src="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/aeomibanner.png"
                        alt="Aeomi Banner"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">venture · 2026 — present</p>
                <h1>aeomi</h1>
                <p className="text-lg text-muted-foreground font-medium mt-2">
                    ai that remembers.
                </p> */}
            </div>

            <p>
                most ai resets after every conversation. every time you open a new chat, it has no idea who you are, what you&apos;ve been working on, or what matters to you.
            </p>
            <p>
                that&apos;s the problem aeomi is built to solve.
            </p>

            <div className="my-10 border-t border-border pt-8">
                <h2>what it is</h2>
                <p>
                    aeomi is a research lab and product studio working on memory-centric intelligence — ai that remembers what matters, understands users over time, and evolves with them.
                </p>
                <p>
                    the goal isn&apos;t to replace existing ai. it&apos;s to build the memory layer that sits on top — making any ai interaction actually personal.
                </p>
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>why this</h2>
                <p>
                    i&apos;ve spent years watching people try to use ai tools and hit the same wall — it doesn&apos;t know them. you have to re-explain yourself every single session.
                </p>
                <p>
                    humans don&apos;t work that way. relationships deepen over time. tools should too.
                </p>
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>what&apos;s being built</h2>
                <ul>
                    <li>memory intelligence architecture — structured long-term memory for ai systems</li>
                    <li><Link href="/projects/mia" className="internal-link">mia</Link> — the first product built on the aeomi memory stack</li>
                    <li>research on how humans store, retrieve, and build on knowledge over time</li>
                </ul>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">related</p>
                <div className="flex flex-col space-y-2">
                    <Link href="/projects/mia" className="internal-link block w-fit">mia — ai companion built on aeomi</Link>
                    <Link href="/projects/lixta-labs" className="internal-link block w-fit">lixta labs — holding company</Link>
                    <Link href="/" className="internal-link block w-fit">about me</Link>
                </div>
            </div>
        </article>
    );
}
