import Link from "next/link";
import Image from "next/image";

export default function LixtaNetworkPage() {
    return (
        <article className="prose-custom w-full max-w-none pb-16">
            <div className="mb-6">
                <div className="mt-8 overflow-hidden border border-border">
                    <Image
                        src="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/lixtanetworkbanner.png"
                        alt="Space Illustration"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">studio · jul 2024 — present · registered llp</p> */}
                {/* <h1>lixta network</h1>
                <p className="text-lg text-muted-foreground font-medium mt-2">
                    a creative studio that builds with startups.
                </p> */}
                <h1 className="font-medium">
                    a creative studio that builds with startups.
                </h1>

            </div>

            <p>
                lixta network started as an agency. it's now a studio, a model where we don't just work for clients, we build alongside them.
            </p>

            <p>
                we help startups build actual products mvps, tech systems, and distribution infrastructure. we move fast, test with real users, and focus on what ships over what sounds good.
            </p>
            {/* <p>
                registered as an llp in july 2024. currently operating out of mumbai, india.
            </p> */}

            {/* <div className="my-10 border-t border-border pt-8">
                <h2>what we do</h2>
                <p>
                    we help startups build actual products mvps, tech systems, and distribution infrastructure. we move fast, test with real users, and focus on what ships over what sounds good.
                </p>
            </div> */}

            <div className="my-10 border-t border-border pt-8">
                <h2>This note highlights selected projects we worked.</h2>
                <ul>
                    <li>10+ startups launched</li>
                    <li>worked with 200+ clients before the studio pivot</li>
                    <li>strong growth metrics post-pivot to studio model</li>
                    <li>built across industries: ai, consumer apps, saas, gaming</li>
                </ul>
            </div>

            {/* <div className="my-10 border-t border-border pt-8">
                <h2>the studio model</h2>
                <p>
                    the shift from agency to studio was intentional. agencies build for clients. studios build with them. skin in the game, shared outcomes, faster iteration.
                </p>
                <p>
                    this is how i believe products should be built.
                </p>
            </div> */}

            <div className="mt-16 pt-8 border-t border-border">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">related</p>
                <div className="flex flex-col space-y-2">
                    <Link href="/projects/lixta-labs" className="internal-link block w-fit">lixta labs — holding company</Link>
                    <Link href="/projects/aeomi" className="internal-link block w-fit">aeomi — current flagship venture</Link>
                    <Link href="/" className="internal-link block w-fit">about me</Link>
                    <a href="https://lixtanetwork.com" target="_blank" rel="noopener noreferrer" className="external-link block w-fit">lixtanetwork.com ↗</a>
                </div>
            </div>
        </article>
    );
}
