import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <article className="prose-custom w-full max-w-none pb-16">
            <h1>about me</h1>

            <p>
                i'm just a guy that loves creating things for others.
            </p>

            <p>
                i started my first company at 11 where i build robots and pitch to iit bombay, was a great journey.
            </p>

            <p>
                building stuff online turned into business obsession, that make me build startups later
            </p>

            <p className="font-semibold text-foreground">
                that shift changed everything.
            </p>

            <div className="mt-8 overflow-hidden border border-border">
                <Image
                    src="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/robotsatiit.png"
                    alt="Space Illustration"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                />
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>what i’m doing now</h2>

                <p>
                    these days i'm building random stuff and seeing what i want to spend more time on. recently <Link href="/projects/lixta-network" className="internal-link">lixta network</Link>, <Link href="/projects/lixta-labs" className="internal-link">lixta labs</Link>, <Link href="/projects/komunity" className="internal-link">komunity</Link>, <Link href="/projects/aeomi" className="internal-link">aeomi</Link> and some other viral stuff.
                </p>

                <p>
                    in the past, i founded a <Link href="/essays/reflections-on-selling-my-company" className="internal-link">game development company</Link>, worked with more than 40+ clients across the globe. got acquired in 2023.
                </p>

                {/* <p>
                    i’m currently building <Link href="/projects/aeomi" className="internal-link">aeomi</Link> — an ai system focused on memory intelligence.
                </p>
                <p>
                    most ai resets after every conversation. aeomi is designed to remember what matters, understand users over time, and evolve with them.
                </p>
                <p>
                    on top of that, i’m building <Link href="/projects/mia" className="internal-link">mia</Link>, an ai companion that feels more human — not just a tool, but something that actually knows you.
                </p> */}


                <div className="mt-8 overflow-hidden border border-border">
                    <Image
                        src="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/haiderisyours.png"
                        alt="Space Illustration"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* <div className="my-10 border-t border-border pt-8">
                <h2>what i’ve learned</h2>
                <ul className="space-y-4">
                    <li>building is easy, distribution is hard</li>
                    <li>users don’t care about features, they care about experience</li>
                    <li>most products fail because they don’t give users a reason to come back</li>
                    <li>focus matters more than ideas</li>
                </ul>
            </div> */}

            <div className="my-10 border-t border-border pt-8">
                <h2>few things about me</h2>
                <ul className="space-y-4">
                    <li>currently living in mumbai</li>
                    <li>born in 2005, started building robots from 11</li>
                    <li>wanted to study robotics, but sadly doing btech in aiml</li>
                    <li>just fucking obsessed with tech</li>
                </ul>

                <div className="mt-8 overflow-hidden border border-border">
                    <Image
                        src="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/thechildinme.png"
                        alt="Space Illustration"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* <div className="my-10 border-t border-border pt-8">
                <h2>where i’m going</h2>
                <p>
                    i’m focused on building products that combine ai, memory, and human behavior — and scaling them with strong distribution systems.
                </p>
                <p>
                    long term, i want to build a system of products that don’t just function, but actually evolve with people.
                </p>
            </div> */}

            <div className="my-10 -mt-6">
                {/* <h2>one line</h2> */}
                <p className="italic font-medium text-foreground text-sm">
                    i build fast, learn faster, and now i’m focused on making one thing actually work.
                </p>
            </div>

            <div className="mt-12 mb-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">links to explore</p>
                <div className="flex flex-col space-y-2 mt-4">
                    <Link href="/projects/lixta-network" className="internal-link block w-fit">Lixta Network</Link>
                    {/* <Link href="/projects/homeforbuilders" className="internal-link block w-fit">Home for Builders</Link>
                    <Link href="/projects/komunity" className="internal-link block w-fit">Komunity</Link> */}
                    <Link href="/projects/lixta-labs" className="internal-link block w-fit">Lixta Labs</Link>
                    <Link href="/projects/aeomi" className="internal-link block w-fit">Aeomi</Link>
                    <Link href="https://youtube.com/@haiderkhursheedk" className="external-link block w-fit">YouTube</Link>
                </div>
            </div>

            {/* <div className="mt-8 rounded-lg overflow-hidden border border-border">
                <Image
                    src="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/game.webp"
                    alt="Space Illustration"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                />
            </div> */}
        </article>
    );
}
